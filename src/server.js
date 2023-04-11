const express = require("express");
const app = express();
const port = process.env.port || 6800;

const mongoose = require("mongoose");
const {Note, Task} = require("./models/note&task");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb://localhost:27017/note-taskDatabase",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("mongodb connection successful ...");
    //* App Routes
    

    app.get("/", (req, res) => {

      const response = {statuscode : res.statusCode, message : "Api Works!"}
      res.json(response);
      // res.send("This is the Home Page");

    });

    const noteRouter = require("./routes/Note");
    app.use("/notes", noteRouter);

    const taskRouter = require("./routes/Task");
    app.use("/tasks", taskRouter);
   
  })
  .catch((err) => {
    console.log(err.toString());
  });

//* Starting the server on a PORT
app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});

