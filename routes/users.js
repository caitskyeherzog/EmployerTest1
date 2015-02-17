var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Luke = {
    name: 'Luke Skywalker',
    address: {
      street: '123 Skywalker Lane',
      planet: 'Tatooine',
      galaxy: 'Galactic Empire'
    }

  },
  friends [

  ]
};

  res.send('respond with a resource');
});

module.exports = router;
