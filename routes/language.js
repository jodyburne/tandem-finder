const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");

const { checkLogin } = require("../middlewares");


router.post("/add", checkLogin, (req, res, next) => {
  let language = req.body.language;
  let level = req.body.level;
  let userId = req.user.id;
  Language.create({ _user: userId, language: language, level: level }).then(
    language => {
      console.log("language created: ", language);
      res.redirect("/profil/view");
    }
  );
});

router.get("/edit/:id", checkLogin, (req, res, next) => {
  let languageId = req.params.id;
  Language.findById(languageId);
});

router.get("/delete/:id", checkLogin, (req, res, next) => {
  let languageId = req.params.id;
  Language.findByIdAndDelete(languageId).then(language => {
    console.log("Language deleted:", language);
    res.redirect("/profil/view");
  });
});

module.exports = router;
