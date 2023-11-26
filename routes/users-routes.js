const express = require('express');
const router = express.Router();
const userController = require("../controllers/users-controller");

router
    .route("/")
    .get(userController.index);

router
    .route("/:id")
    .get(userController.find);

module.exports = router;

