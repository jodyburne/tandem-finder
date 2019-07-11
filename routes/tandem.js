const express = require("express");
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();
// const multer  = require('multer');
const User = require("../models/User");
const Language = require("../models/Language");
const Tandem = require("../models/Tandem");

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
  let languageWanted = req.query.language;
  let languageOffered = req.query.langOffer;
  let wantedLevel;
  let offeredLevel;
  let user = req.user;

  Language.find({ _user: user.id })
    .then(languages => {
      console.log("user's languages: ", languages);
      for (let i = 0; i < languages.length; i++) {
        if (languages[i].language === languageWanted) {
          wantedLevel = languages[i].level;
        }
      }
      for (let i = 0; i < languages.length; i++) {
        if (languages[i].language === languageOffered) {
          offeredLevel = languages[i].level;
        }
      }
    })
    .then(() => {
      Promise.all([
        Language.find({
          language: languageWanted,
          level: { $gt: wantedLevel }
        }).populate("_user"),
        Language.find({
          language: languageOffered,
          level: { $lt: offeredLevel }
        }).populate("_user")
      ]).then(([offered, wanted]) => {
        let userOffered = offered.map(offer => offer._user);
        let userWanted = wanted.map(wanted => wanted._user);
        let userFinal = [];

        for (let i = 0; i < userOffered.length; i++) {
          for (let j = 0; j < userWanted.length; j++) {
            if (userOffered[i].toString() === userWanted[j].toString()) {
              userFinal.push(userWanted[j]);
            }
          }
        }
        res.render("tandem/find", {
          userFinal,
          user,
          languageOffered,
          languageWanted,
          errMessage: "Oh no! No tandems were found.  Try a different language?",
          tryAgainLink: "Search again"
        });
      });
    });
});

router.get("/all", checkLogin, (req, res, next) => {
  let user = req.user;
  res.render("tandem/all", { user });
});

router.get("/create/:id", checkLogin, (req, res, next) => {
  let proposedId = req.params.id;
  let userId = req.user.id;
  let user = req.user
  Tandem.create({ _proposer: userId, _proposedTo: proposedId }).then(() => {
    res.render("tandem/all", { user });
  });
});

module.exports = router;
