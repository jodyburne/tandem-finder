const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

const { checkLogin } = require("../middlewares");

/* GET home page */
router.get("/view", checkLogin,(req, res, next) => {
  let user = req.user;
  Language.find({ _user: user.id }).then(languages => {
    console.log(languages);
    res.render("profil/view", { languages, user });
  });
});

router.get("/edit/:userId", checkLogin, (req, res, next) => {
  User.findById(req.params.userId).then(user => {
    res.render("profil/edit", { user: user });
  });
});

router.post("/edit/:userId",checkLogin,
  uploadCloud.single("picture"),
  (req, res, next) => {
    let userImg = "";
    if (req.file) {
      userImg = req.file.secure_url;
      console.log(req.file)
    } else {
      console.log("req undefined");
      userImg = req.user.profilePic;
    }
    User.findByIdAndUpdate(req.params.userId, {
      bio: req.body.bio,
      nationality: req.body.nationality,
      dateOfBirth: req.body.dateOfBirth,
      profilePic: userImg
    }).then(user => {
      // Redirect to the detail page of the item
      res.redirect("/profil/view");
    });
  }
);


router.get("/view/:id", checkLogin,(req, res, next) => {
  let user = req.user;
  let searchedUserId = req.params.id
  User.findById(searchedUserId)
  .then((foundUser) => {
    res.render("profil/viewPartner", {user, foundUser });
  });
});



module.exports = router;
