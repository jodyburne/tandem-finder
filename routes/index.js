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
    
    let userImg =""
    if (req.file) {
      userImg = req.file.secure_url
    }
    else {
      console.log('req undefined')
      userImg = req.user.profilePic
    }
    User.findByIdAndUpdate(req.params.userId, {
    
    bio: req.body.bio,
    nationality: req.body.nationality,
    dateOfBirth: req.body.dateOfBirth,
    profilePic: userImg,

  })
    .then(user => {
      // Redirect to the detail page of the item
      res.redirect("/");
    });
});

module.exports = router;
