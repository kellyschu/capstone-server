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

const comments = async (req, res) => {
    try {
        const { id } = req.params;
        const info = await knex('comments')
            .join('users', 'comments.user_id', 'users.id')
            .join('episodes', 'comments.episode_id', 'episodes.id')
            .select(
                'users.first_name',
                'users.last_name',
                'comments.content',
                'comments.timestamp'
            )
            .where({ 'comments.episode_id': id });

        res.status(200).json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateEpisode = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedRows = await knex('episodes')
            .where({ id })
            .update({
                likes: req.body.likes !== undefined ? req.body.likes : knex.raw('likes'), // Update likes if provided in the request
                saves: req.body.saves !== undefined ? req.body.saves : knex.raw('saves'), // Update saves if provided in the request
            });

            if (updatedRows > 0) {
                res.status(200).json({ success: true, updatedRows });
            } else {
                res.status(404).json({ success: false, message: 'Episode not found or no updates performed.' });
            };
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const category = async (req, res) => {
    const { id } = req.params;
    try {
        const episodes = await knex('episodes').where('category', id);
        res.status(200).json(episodes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const { v4: uuidv4 } = require('uuid');


const addComment = async (req, res) => {
    const { id: episodeId } = req.params;
    const { user_id, content } = req.body;
    if (!user_id || !content) {
        return res.status(400).json({ error: "user_id or content is undefined" });
    }
    try {
        const episode = await knex('episodes')
        .where({ id: episodeId }).first(); 
        if (!episode) {
            return res.status(400).json({ error: "Episode ID does not exist" });
        }

        const commentId = uuidv4();
        const timestamp = new Date();

        await knex('comments').insert({
            id: commentId,
            episode_id: episodeId,
            user_id,
            timestamp: timestamp,
            content,
        });
        res.status(201).json({ success: true });

    } catch (error) {
        res.status(500).json({ error: `Can't add new comment: ${error}` });
    }
};

module.exports = {
    index,
    find,
    updateEpisode,
    comments,
    category,
    addComment
};
