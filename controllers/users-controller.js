const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('users');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving users: ${error}`)
    }
}

const find = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await knex('comments')
            .join('users', 'comments.user_id', 'users.id')
            .join('episodes', 'comments.episode_id', 'episodes.id')
            .where('users.id', id)
            .select('users.id', 'users.first_name', 'users.last_name', 'comments.content', 'episodes.id', 'episodes.title', 'episodes.channel');
        
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'User was not found' });
        }
    } catch (error) {
        res.status(400).send(`Error retrieving user: ${error}`);
    }
};

module.exports = {
    index,
    find
};