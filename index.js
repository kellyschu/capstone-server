require ('dotenv').config();
const express = require('express');
const cors = require('cors');
// const commentRoutes = require('./routes/comments-routes'); 
// const episodeRoutes = require('./routes/episodes-routes');
// const userRoutes = require('./routes/user-routes'); 
// const db = require('./db'); // Importing database connection from db.js\
const knex = require('knex')(require('./knexfile.js'));


const app = express();
const PORT = process.env.PORT || 8004;

app.use(cors())
app.use(express.json());

// app.use('/api/comments', commentRoutes); 
// app.use('/api/users', userRoutes); 
// app.use('/api/episodes', episodeRoutes); 


app.get('/api/episodes', async (req, res) => {
    const episodes = await knex("episodes")
    res.json(episodes);
});

app.get('/api/comments', async (req, res) => {
    const comments = await knex("comments")
    res.json(comments);
});

app.get('/api/episodes/:id/comments', async (req, res) => {
    const joined = await knex("comments")
    .join("episodes", "episodes.id", "comments.episode_id")
    .join("users", "users.id", "comments.user_id")
    .where({"episode_id": req.params.id})
    res.json(joined);
});

app.get('/api/episodes/:id', async (req, res) => {
    const episode = await knex("episodes")
    .where({"id": req.params.id})
    res.json(episode);
});

app.get("/", function(req, res){
    res.send("Hi there, welcome to my app");
})

app.listen(PORT, function(){
    console.log("Listening on " + PORT);
});