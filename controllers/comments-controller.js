const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('comments');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving comments: ${error}`)
    }
}

const find = async (req, res) => {
    try {
        const joined = await knex('comments')
        .join("episodes", "episodes.id", "comments.episode_id")
        .join("users", "users.id", "comments.user_id")
        .where({"episode_id": req.params.id})
        if (joined) {
        res.status(200).json(joined);
        } else {
        res.status(404).json({ error: 'Comments not found' });
        }
    } catch (error) {
        res.status(400).send(`Error retrieving comments: ${error}`);
    }
};

    module.exports = {
        find,
        index
    }