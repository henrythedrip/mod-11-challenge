const express = require('express');
const path = require('path');
const fs = require('fs');
const router = require('./controllers')

const app = express();
const port = 3001;

// uses middleware that allows certain files to be provided to the frontend
app.use('/static', express.static('./Develop/public'));

// this uses express to work with JSON using 'magic'
app.use(express.json());

// this uses router to connect to the contorllers file system
app.use(router);

// begins listening for requests at the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Please visit http://localhost:${port}`)
})
