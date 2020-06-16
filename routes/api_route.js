const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

router.get("/api/notes", async (req, res) => {

    console.log("I'm here get request");
    let note = await read("./db/db.json");
    note = JSON.parse(note);
    res.json(note);

});

router.post("/api/notes", async (req, res) => {

    // console.log("I'm here post request");
    let note = await read("./db/db.json");
    note = JSON.parse(note);
    console.log(note);
    const id = note.length + 1;
    console.log(id);
    console.log(req.query.id);
    res.send(req.query);
    // note = JSON.parse(note);
    // res.json(note);

});

router.delete("/api/notes", async (req, res) => {

    console.log("I'm here delete request");


});

module.exports = router;