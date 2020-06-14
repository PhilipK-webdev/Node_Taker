const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const read = util.promisify(fs.readFile);

router.get("/api/notes", async (req, res) => {

    console.log("I'm here");
    let note = await read("./db/db.json");
    note = JSON.parse(note);
    res.json(note);

});

module.exports = router;