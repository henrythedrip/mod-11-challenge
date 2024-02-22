const router = require('express').Router();
const path = require('path');

  // defines a route for the wildcard where it always takes you to the same file: index.html
router.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname, '../Develop/public'),
  }
  res.sendFile('index.html', options);
})

module.exports = router;