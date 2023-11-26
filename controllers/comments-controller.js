const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
    try {
        const data = await knex('comments');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving comments: ${error}`)
    }
}

    const add = async (req, res) => {
        try {
        const { episode_id, user_id, timestamp, content } = req.body;
        if (!episode_id || !user_id || !timestamp || !content) {
            return res.status(400).json({ error: "please fill in all required fields" });
        }
    
        const episode = await knex('epsiodes').where({ id: episode_id }).first();
        if (!episode) {
            return res.status(400).json({ error: "Episode ID does not exist" });
        }
        const user = await knex('users').where({ id: user_id }).first();
        if (!user) {
            return res.status(400).json({ error: "User ID does not exist" });
        }
        const result = await knex('comments').insert(req.body);
    
        const newCommentId = result[0];
        const createdComment = await knex('comments').where({ id: newCommentId });
        res.status(201).json(createdComment);
        } catch (error) {
        res.status(500).json({
            message: `Can't add new comment: ${error}`
        })
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
        add,
        index
    }