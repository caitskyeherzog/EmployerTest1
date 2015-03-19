var express = require('express');
var router = express.Router();
"use strict";

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Luke = {
    "name": "Luke Skywalker",
    "address": "123 Skywalker Lane"
  };

  res.send(Luke);
});

module.exports = router;
