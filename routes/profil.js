const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");


/* GET home page */
router.get('/profil-view', (req, res, next) => {
  res.render('profil');
})

module.exports = router;