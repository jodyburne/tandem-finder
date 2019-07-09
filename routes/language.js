const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

router.get("/language", (req, res, next) => {
  let userId = req.user.id;
  Language.find({ _user: userId }).then(languages => {
    console.log(languages);
    res.render("profil/language", { languages });
  });
});

router.post("/add", (req, res, next) => {
  let language = req.body.language;
  let level = req.body.level;
  let userId = req.user.id;
  Language.create({ _user: userId, language: language, level: level }).then(
    language => {
      console.log("language created: ", language);
      res.redirect("/language/language");
    }
  );
});

router.get("/edit/:id", (req, res, next) => {
  let languageId = req.params.id;
  Language.findById(languageId);
});

router.get("/delete/:id", (req, res, next) => {
  let languageId = req.params.id;
  Language.findByIdAndDelete(languageId).then(language => {
    console.log("Language deleted:", language);
    res.redirect("/language/language");
  });
});

module.exports = router;
