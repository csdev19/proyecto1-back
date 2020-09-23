
const express = require('express');
const router = express.Router();

const c_publication = require('./c_publication');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/getPublications', c_publication.getPublications);

module.exports = router;

