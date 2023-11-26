const express = require('express');
const router = express.Router();
const commentsController = require("../controllers/comments-controller");

router
    .route("/")
    .get(commentsController.index)

router
    .route("/:id/comments")
    .get(commentsController.find)
    .post(commentsController.add);

module.exports = router;