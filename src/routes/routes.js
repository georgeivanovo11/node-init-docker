const router = require('express-promise-router')();
const controller = require('../controllers/controller');

router.get('/start', controller.start);

module.exports = router;
