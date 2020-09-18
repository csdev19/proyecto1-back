// Experimento

var express = require('express');
var router = express.Router();

var c_login = require('./../controllers/login');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', c_login.authLogin);
// define the about route
router.get('/hola', c_login.hola);

module.exports = router;

