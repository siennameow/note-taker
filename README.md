# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/note-taker/blob/main/LICENSE)

## Description 📝 

This is a simple Note Taker application that allows users to add, view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file.

Deployed Application : https://note-taker-platinum.herokuapp.com/

## Table of Contents 📖

* [Application Preview ⭐](#application-preview-)
* [Features 📋](#features-)
* [Code-Snippet 💻](#code-snippet-)
*  [Installation 🗳](#installation-)
* [Usage 💡](#usage-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [Contribution 👩🏻‍💻](#contribution-)
* [Questions ❓](#questions-)
* [Credits 🙌](#credits-)

## Application Preview ⭐
 

## Features 📋

⚡️ `Express.js` to build server
⚡️ `fs(File System)` module to read and write from 'db.json' file.
⚡️ deployed on [heroku](http://heroku.com/)

## Code-Snippet 💻

JavaScript

API route DELETE created to receive a query parameter that contains the id of a note to delete. It reads all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

```JavaScript
app.delete('/api/notes/:id', (req, res) => {
  
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.forEach(function(thisNote, i) {              
      if (thisNote.id === req.params.id) {
        
          notes.splice(i, 1)            
      }
})
```

API route POST receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 

```JavaScript
app.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {

    if (err) throw err;
    var notes = JSON.parse(data);
    let addNote = req.body;
    addNote.id = uuid();
    notes.push(addNote);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
      if (err) throw err;
      res.json(addNote);
      console.info('Successfully updated notes!')
    });
  }); 
});
```

## Installation 🗳 

- Download or clone repository to use this application on local machine.
- Node.js is required to run the application
- To install necessary dependencies, run the following command :
    `npm i`

## Usage 💡

After installation :

- Run `node server.js` in terminal to start. It will show a comment "This will start localhost server on PORT 3001."

- Open browser and type http://localhost:3001/ to run this application on your local machine.

You can also check the Deployed Live Application : https://note-taker-platinum.herokuapp.com/

## Skill Improved 📚
✔️ Node.js\
✔️ Express.js\
✔️ Backend Application\
✔️ Api routes\
✔️ Javascript\
✔️ JSON\
✔️ Heroku

## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)

## License 📜
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/note-taker/blob/main/LICENSE)
MIT License

Copyright (c) 2022 Sienna Li

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contribution 👩🏻‍💻 
If you would like to contribute to this project reach out to me. Contact Information can be found below or by clicking on the `Questions` link provided in the Table of Contents.

## Questions ❓

📩 If you have any question, email me here at : lihexuan1@gmail.com<br/>
:octocat: My Github page is [siennameow](https://github.com/siennameow)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
