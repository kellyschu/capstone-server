const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('episodes');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving episodes: ${error}`);
    }
};

const find = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await knex('episodes').where({ id }).first();
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'Episode was not found' });
        }
    } catch (error) {
        res.status(400).send(`Error retrieving episode: ${error}`);
    }
};

const data = async (req, res) => {
    try {
        const { id } = req.params;
        const info = await knex('comments')
            .join('users', 'comments.user_id', 'users.id')
            .join('episodes', 'comments.episode_id', 'episodes.id')
            .select(
                'users.first_name',
                'users.last_name',
                'comments.content',
                'comments.timestamp',
                'episodes.id as episode_id',
                'episodes.likes',
                'episodes.saves'
            )
            .where({ 'comments.episode_id': id });

        res.status(200).json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const { v4: uuidv4 } = require('uuid');


const addComment = async (req, res) => {
    const { id: episodeId } = req.params;
    const { user_id, timestamp, content } = req.body;
    try {
        const episode = await knex('episodes')
        .where({ id: episodeId }).first(); 
        if (!episode) {
            return res.status(400).json({ error: "Episode ID does not exist" });
        }

        const commentId = uuidv4();
        await knex('comments').insert({
            id: commentId,
            episode_id: episodeId,
            user_id: user_id,
            timestamp: timestamp,
            content: content,
        });
        res.status(201).json({ success: true });

    } catch (error) {
        res.status(500).json({ error: `Can't add new comment: ${error}` });
    }
};

module.exports = {
    index,
    find,
    data,
    addComment
};
