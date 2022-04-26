// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 3001;
// Sets up the Express app to handle data parsing
app.use(express.static('public'));
// HTML Routes

        //GET /notes should return the notes.html file.

        //GET * should return the index.html file.
// API Routes

        //GET /api/notes should read the db.json file and return all saved notes as JSON.

        //POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));