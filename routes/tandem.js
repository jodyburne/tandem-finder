const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");

const { checkLogin } = require("../middlewares");


/* GET home page */
router.get('/my-tandems', checkLogin, (req, res, next) => {
  res.render('my-tandems');
})

module.exports = router;