
const express = require('express');
const router = express.Router();

const c_profile = require('./c_profile');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/getProfileInfo', c_profile.getProfileInfo);

module.exports = router;

