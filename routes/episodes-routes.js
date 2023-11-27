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
    .route('/:id/data')
    .get(episodeController.data)
    .post(episodeController.addComment)
    // .patch(episodeController.updateData)
    // .delete(episodeController.deleteComment);


module.exports = router;