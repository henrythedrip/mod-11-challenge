const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

// uses middleware that allows certain files to be provided to the frontend
app.use('/static', express.static('./Develop/public'));

// here we handle a post request that interacts with the filesystem on the webserver, allowing us to interact with files on the backend, from the frontend
app.post('/notes', (req, res) => {
    const file = fs.readFileSync('./Develop/db/db.json');
    const dbjson = JSON.parse(file);
    console.log(dbjson);
    res.status = 200;
    res.end()
    // res.send('db.json posted to the terminal.')
});


// defines a route to get /notes
app.get('/notes', (req, res) => {
    const options = {
      root: path.join(__dirname, 'Develop/public'),
    }
    res.sendFile('notes.html', options);
  })

  // defines a route for the wildcard where it always takes you to the same file: index.html
app.get('*', (req, res) => {
    const options = {
      root: path.join(__dirname, 'Develop/public'),
    }
    res.sendFile('index.html', options);
  })

// begins listening for requests at the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Please visit http://localhost:${port}`)
})
