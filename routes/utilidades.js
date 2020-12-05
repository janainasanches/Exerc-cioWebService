var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/Utilidades', function(req, res, next) {
  res.render('Utilidades')
});

module.exports = router;
