const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();
// const multer  = require('multer');
const User = require("../models/User");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/edit-profile/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => {
      res.render('edit-profile', {user: user});

  })
});

router.post("/edit-profile/:userId", uploadCloud.single('picture'), (req, res, next) => {
      // console.log("BUUUUUGGG", req.file)
    User.findByIdAndUpdate(req.params.userId, {
    bio: req.body.bio,
    location: req.body.location,
    profilePic: req.file.secure_url
  
  })
    .then(user => {
      // Redirect to the detail page of the item
      res.redirect("/");
    });
});

module.exports = router;
