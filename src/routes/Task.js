const express = require("express");
const router = express.Router();

const {Note, Task} = require("../models/note&task")

// app.get("/notes/list/:userId", async(req, res) => {
//   const note = await Note.find({ userId: req.params.userId });
//   res.json(note);
// });

router.post("/list", async (req, res) => {
    const task = await Task.find({ userId: req.body.userId  });
    res.json(task);
  });

router.post("/add", async (req, res) => {
    await Task.deleteOne({ id: req.body.id });

  const newTask = new Task({ 
    id: req.body.id,
    userId: req.body.userId,
    title: req.body.title,
    icon: req.body.icon,
    color: req.body.color,
    todos: req.body.todos,
  });
  await newTask.save();

  const response = { message: `New Task Created with title: ${req.body.title} -> user : ${req.body.userId}` };
  res.json(response);
});

router.post("/delete", async (req, res) => {
    await Task.deleteOne({ id: req.body.id });
  
    const response = { message: "Task Deleted! -> " + `id: ${req.body.id}` };
    res.json(response);
  });

  module.exports = router;