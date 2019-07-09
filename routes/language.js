const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");


/* GET home page */
router.get('/language', (req, res, next) => {
  res.render('languages');
})

router.get('/language-edit/:id', (req, res, next) => {
  let languageId= req.params.id
  res.render('languages');
})



module.exports = router;