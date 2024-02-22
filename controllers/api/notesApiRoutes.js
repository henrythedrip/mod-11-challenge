const router = require('express').Router();
const fs = require('fs');

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// this goes to "/api/notes"
router.get('/', (req, res) => {
  const file = fs.readFileSync('./Develop/db/db.json');
  const dbJson = JSON.parse(file);
  res.json(dbJson);
})

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// this goes to "/api/notes"
router.post('/', (req, res) => {
  // get and parse the dbjson
  const file = fs.readFileSync('./Develop/db/db.json');
  const dbJson = JSON.parse(file);

  // this is the post request body, its already json
  const bodyJson = req.body

  // create unique id for new note
  bodyJson.id = crypto.randomUUID();

  // next, we need to add the new note to the dbjson array
  dbJson.push(bodyJson);

  // then we need to save the dbjson file after adding the new note
  fs.writeFileSync('./Develop/db/db.json', JSON.stringify(dbJson), err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

  // then we need to return the new note object as json to the client
  res.json(bodyJson);

  // res.send('db.json posted to the terminal.')


});

// delete api/notes
router.delete('/:id', (req, res) => {
    
    // get specified note id from request
    const note_id = req.params.id;

    // select a note to delete based on its id
    const file = fs.readFileSync('./Develop/db/db.json')
    const dbJson = JSON.parse(file);

    // and then remove it from the object
    const newArray = dbJson.filter( note => {
      return note.id !== note_id;
    });

    // and then save again
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newArray), err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    res.status(200);
    res.end();
  });

module.exports = router;