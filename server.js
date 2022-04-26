// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs')

// Sets up the Express App
const app = express();
const PORT = process.env.port || 3001;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// HTML Routes

        //GET /notes should return the notes.html file.
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});
        //GET * should return the index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API Routes

        //GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  res.json(`${req.method} request received to get notes`);
  //read file and return all saved notes
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data));
      }
});
  // Log request to the terminal
  console.info(`${req.method} request received to get notes`);
});
        //POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

        //DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));