const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

router.get("/api/notes", async (req, res) => {

    console.log("I'm here get request");
    let noteTask = await read("./db/db.json");
    const { note } = JSON.parse(noteTask);
    console.log(note);
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

    console.log("I'm here delete request");
    let data = await read("./db/db.json");
    data = JSON.parse(data);

    let { note } = data;
    console.log(req.params);
    const noteToDelete = parseInt(req.params.id);
    console.log(typeof noteToDelete);

    //const newNote = note.filter(deleteNote => {

    //     return noteToDelete !== deleteNote.id;
    // });
    const newNote = note.findIndex(deleteNote => noteToDelete === deleteNote.id);

    note.splice(newNote, 1);
    // const newObj = {};
    // newObj.note = newNote;
    await write("./db/db.json", JSON.stringify(data, null, 2));
    res.json(data);

});

module.exports = router;