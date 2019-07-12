const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");


/* GET home page */
router.get('/', (req, res, next) => {
  let user = req.user
  if (user) {
    res.redirect('/profil/view');
  }
  res.render('index', {user});
});

router.get('/riddle', (req, res, next) => {
  res.render('riddle');
});

module.exports = router;
