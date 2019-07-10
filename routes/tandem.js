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
    // console.log("user's languages: ", languages);
    res.render("tandem/find", { user, languages });
  });
});

router.get("/find-lang", (req, res, next) => {
  console.log("hello", req.user);
  let languageWanted = req.query.language;
  let userLevel;
  let user = req.user;
  Language.find({ _user: user.id }).then(languages => {
    console.log("user's languages: ", languages);
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].language === languageWanted) {
        userLevel = languages[i].level;
      }
    }
    console.log("DEBUG: ", userLevel)
    Language.find({ language: languageWanted, level: { $gt: userLevel } }).then(
      languages => {
        console.log("searcch results", languages);
      }
    );
    // console.log(languageWanted, userLevel)
    res.render("tandem/find", { user, languages });
  });
});

router.get("/all", checkLogin, (req, res, next) => {
  let user = req.user;
  res.render("tandem/all", { user });
});

module.exports = router;
