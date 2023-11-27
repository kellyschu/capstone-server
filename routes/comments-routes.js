const express = require('express');
const router = express.Router();
const commentsController = require("../controllers/comments-controller");

router
    .route("/")
    .get(commentsController.index)

router
    .route("/episodes")
    .get(commentsController.allComments)



module.exports = router;