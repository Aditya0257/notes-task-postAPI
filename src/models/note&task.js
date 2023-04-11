//* 1. Define Schema -> Note: id, userId, title, content, dateAdded
//* 2. Create Model <collection creation> -> <model name> <schema> Note 

const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id: {
        type : String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }

});

const Note = mongoose.model("Note",noteSchema);

const taskSchema = mongoose.Schema({
    id: {
        type : String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    todos: [],
})

const Task = mongoose.model("Task", taskSchema);

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  const User = mongoose.model("User", userSchema);
  

module.exports = {Note, Task, User};

