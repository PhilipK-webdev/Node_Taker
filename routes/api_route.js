const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

router.get("/api/notes", async (req, res) => {
    let noteTask = await read("./db/db.json");
    const { note } = JSON.parse(noteTask);
    res.json(note);
});

router.post("/api/notes", async (req, res) => {
    let data = await read("./db/db.json");
    data = JSON.parse(data);
    let idNote = data.note.length + 1;
    const newNote = req.body;
    newNote.id = idNote;
    data.note.push(newNote);
    await write("./db/db.json", JSON.stringify(data, null, 2));
    res.json(data);
});

router.delete("/api/notes/:id", async (req, res) => {
    let data = await read("./db/db.json");
    data = JSON.parse(data);
    let { note } = data;;
    const noteToDelete = parseInt(req.params.id);
    const newNote = note.findIndex(deleteNote => noteToDelete === deleteNote.id);
    note.splice(newNote, 1);
    await write("./db/db.json", JSON.stringify(data, null, 2));
    res.json(data);
});

module.exports = router;