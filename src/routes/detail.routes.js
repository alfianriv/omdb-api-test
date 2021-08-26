const express = require("express");
const { detailMovie } = require("../controller/detail.controller");
const router = express.Router();

router.get("/:id", detailMovie);

module.exports = router;
