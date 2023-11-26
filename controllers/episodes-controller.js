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
        const data = await knex('comments').where({ episode_id: id });
        if (data.length === 0) {
            return res.status(404).json({ error: "No comments found" });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).send(`Error retrieving comments: ${error}`);
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
    comments,
    addComment
};
