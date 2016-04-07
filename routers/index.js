var express = require('express'),
    index   = require('../controllers/index'),
    note  = require('../controllers/note'),
    router  = express.Router();

router.route('/').get(index);
router.route('/note').post(note);

module.exports = router;
