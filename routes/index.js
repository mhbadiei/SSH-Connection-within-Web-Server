const router = require('express').Router();

const dataRoutes = require('./data.routes');
router.use('/data',dataRoutes);

module.exports = router;
