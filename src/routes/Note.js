const express = require("express");
const router = express.Router();

const {Note, Task} = require("../models/note&task")

router.post("/list", async (req, res) => {
  const note = await Note.find({ userId: req.body.userId });
  res.json(note);
});


// app.get("/notes/add", async(req, res) => {

//   const newNote = new Note({
//     id: "0003",
//     userId: "aditya21@gmail.com",
//     title: "My First Note with Second Account",
//     content: "This is the content"
//   });
//   await newNote.save();

//   const response = { message: "New Note Created!" };
//   res.json(response);

// });


router.post("/add", async (req, res) => {

  // res.json(req.body);

  //* updating while adding
  await Note.deleteOne({ id: req.body.id });

  const newNote = new Note({
    id: req.body.id,
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();

  const response = { message: "New Note Created! -> " + `id: ${req.body.id}` };
  res.json(response);
});


router.post("/delete", async (req, res) => {
  await Note.deleteOne({ id: req.body.id });

  const response = { message: "Note Deleted! -> " + `id: ${req.body.id}` };
  res.json(response);
});


module.exports = router;