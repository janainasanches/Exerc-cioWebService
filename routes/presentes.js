var express = require('express');
var router = express.Router();
const app = express();
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const { clear } = require('console');
const apikey = 'vzIILOO5EEjiaGRcRtnygPU8YVXlt6g0GWNGKKIbSyIJ'


/* GET users listing. */
router.get('/Presentes', function(req, res, next) {
  res.render('Presentes')
});

module.exports = router;
