var express = require('express');
var router = express.Router();
var request = require('superagent');
'use strict';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Caits Page' });
});

router.get('/commits', function (req, res) {
  'use strict';
  res.render('commits', {title: 'My Commits'})

});

router.get('/commitData', function(req, res) {
request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=caitskyeherzog")
  .end(function(err, response) {
    res.json(response);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.email);
  res.json({
    message: "Post Working!",
    email: req.body.email,
    username: req.body.username
    })
});

module.exports = router;
