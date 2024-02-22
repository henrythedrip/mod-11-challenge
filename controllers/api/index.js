const router = require('express').Router();

const notesApiRouter = require('./notesApiRoutes');
router.use('/notes', notesApiRouter);

module.exports = router;