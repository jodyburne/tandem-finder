const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

const { checkLogin } = require("../middlewares");

router.post("/create/:tandemId", checkLogin, (req, res, next) => {
  let tandemId = req.params.tandemId;
  let message = req.body.message;
  let user = req.user;
  let userId = user.id;
  console.log("DEBUG: ", message)
  Message.create({
    _creator: userId,
    _tandem: tandemId,
    content: message,
    postedBy: user.firstName
  }).then(message => {
    console.log("message created:", message);
    res.redirect("/tandem/details/" + tandemId);
  });
});

module.exports = router;
