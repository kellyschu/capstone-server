require ('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assingment");
})

app.listen(PORT, function(){
    console.log("hello " + PORT);
});

app.listen( () => console.log(`Listening on ${PORT}`));