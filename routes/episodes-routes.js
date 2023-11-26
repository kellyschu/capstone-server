const express = require('express');
const router = express.Router();
const episodeController = require ('../controllers/episodes-controller')

router
    .route('/')
    .get(episodeController.index);

router
    .route('/:id')
    .get(episodeController.find);

router
    .route('/:id/comments')
    .get(episodeController.comments)
    .post(episodeController.addComment);

    

module.exports = router;