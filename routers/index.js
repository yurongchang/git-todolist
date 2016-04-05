var express = require('express'),
    index   = require('../controllers/index'),
    person  = require('../controllers/person'),
    create = require('../controllers/create'),
    read = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update = require('../controllers/update'),
    del = require('../controllers/del'),
    router  = express.Router();

router.route('/').get(index);
router.route('/person').post(person);

router.route('/person/:id');

module.exports = router;
