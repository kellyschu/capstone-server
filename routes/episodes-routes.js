const express = require('express');
const router = express.Router();
const episodeController = require ('../controllers/episodes-controller')

router
    .route('/')
    .get(episodeController.index);

router
    .route('/category/:id')
    .get(episodeController.category);

router
    .route('/:id')
    .get(episodeController.find)
    .patch(episodeController.updateEpisode);

router
    .route('/:id/comments')
    .get(episodeController.comments)
    .post(episodeController.addComment)
    // .delete(episodeController.deleteComment);



module.exports = router;