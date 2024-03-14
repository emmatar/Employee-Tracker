const router = require('express').Router();

const deparments = require('./api');

router.use('/api', apiRoutes);

module.exports = router;