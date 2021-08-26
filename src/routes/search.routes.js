const express = require("express");
const { searchMovie } = require("../controller/search.controller");
const router = express.Router();

router.get("/", searchMovie);

module.exports = router;
