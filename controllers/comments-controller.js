const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('comments');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving comments: ${error}`)
    }
}


const allComments = async (req, res) => {
    try {
        const joined = await knex('comments')
            .join('episodes', 'episodes.id', 'comments.episode_id')
            .select('episodes.id', 'episodes.title', 'comments.content')
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
        index,
        allComments
    }