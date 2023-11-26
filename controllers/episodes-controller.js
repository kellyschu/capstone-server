const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('episodes');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving episodes: ${error}`)
    }
}

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


module.exports = {
    index,
    find,
    comments
};