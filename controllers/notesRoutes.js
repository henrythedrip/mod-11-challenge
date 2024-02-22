const router = require('express').Router();
const path = require('path');

// defines a route to get /notes
router.get('/', (req, res) => {
    const options = {
      root: path.join(__dirname, '../Develop/public'),
    }
    res.sendFile('notes.html', options);
  })

module.exports = router;