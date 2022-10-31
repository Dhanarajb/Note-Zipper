const express = require("express"); //import express
const notes = require("./data/notes");
const dotenv= require('dotenv')
const app = express(); //create an object
dotenv.config();

app.get("/", (req, resp) => {
  resp.send("Api is running.."); //created first api
});

app.get("/api/notes", (req, resp) => {
  resp.send(notes);
});

app.get("/api/notes/:id", (req, resp) => {
    const note = notes.find((n)=>n._id === req.params.id)
    resp.send(note)
  });

const PORT = process.env.port || 5200
app.listen(PORT, console.log(`Server started on port ${PORT}`)); //web server

// import express
// create an Object
// web server
// api end point is serve data
//created  api
//.env is contains the all secret information related to application   for ex: password
