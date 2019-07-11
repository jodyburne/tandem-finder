const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

router.post("/add", (req, res, next) => {
  let language = req.body.language;
  let level = req.body.level;
  let userId = req.user.id;

  Language.find({ _user: userId }).then(languages => {
    let createErr = true;
    let langArr = languages.map(language => language.language);
    if (!langArr.includes(language)) {
      Language.create({ _user: userId, language: language, level: level });
      createErr = false;
    }
    res.redirect("/profil/view?createErr=" + createErr);
  });
});

router.get("/edit/:id", (req, res, next) => {
  let languageId = req.params.id;
  Language.findById(languageId);
});

router.get("/delete/:id", (req, res, next) => {
  let languageId = req.params.id;
  Language.findByIdAndDelete(languageId).then(language => {
    console.log("Language deleted:", language);
    res.redirect("/profil/view");
  });
});

module.exports = router;
