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
        const data = await knex('users').where({ id }).first();
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