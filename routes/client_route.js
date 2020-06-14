const express = require("express");
const route = express.Router();
const path = require("path");

route.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "../client/notes.html"));

});

route.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "../client/index.html"));

});

module.exports = route;