var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/Presentes', function(req, res, next) {
  res.render('Presentes')
});

module.exports = router;
