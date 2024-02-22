const router = require('express').Router();

const notesRouter = require('./notesRoutes');
router.use('/notes', notesRouter);

const ApiRouter = require('./api')
router.use('/api', ApiRouter);

// this has to go last in the router "stack" because its a wildcard handler
const homepageRouter = require('./homepageRoutes');
router.use('*', homepageRouter);

module.exports = router;