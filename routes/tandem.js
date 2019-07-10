const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

const { checkLogin } = require("../middlewares");

/* GET home page */

router.get("/find", checkLogin, (req, res, next) => {
  let user = req.user;
  Language.find({ _user: user.id }).then(languages => {
    console.log("user's languages: ", languages);
    res.render("tandem/find", { user, languages });
  });
});

router.post("/find", checkLogin, (req, res, next) => {
  let languageWanted = req.body.language;
  let user = req.user;
  Language.find({ _user: user.id }).then(languages => {
    console.log("user's languages: ", languages);
    res.render("tandem/find", { user, languages });
  });
});

router.get("/all", checkLogin, (req, res, next) => {
  let user = req.user
  res.render("tandem/all", {user});
});

module.exports = router;
