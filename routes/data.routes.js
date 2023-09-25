const router = require('express').Router();
const dataController = require('../controllers/data');


router.post('/', dataController.create);

module.exports = router;