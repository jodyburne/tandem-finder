const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

/* GET home page */
router.get("/view", (req, res, next) => {
  let user = req.user;
  Language.find({ _user: user.id }).then(languages => {
    console.log(languages);
    res.render("profil/view", { languages, user });
  });
});

module.exports = router;
