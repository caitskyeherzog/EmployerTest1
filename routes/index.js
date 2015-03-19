var express = require('express');
var router = express.Router();
"use strict";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Caits Page' });
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
