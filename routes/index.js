const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");


/* GET home page */
router.get('/', (req, res, next) => {
  let user = req.user

  res.render('index', {user});
});


module.exports = router;
