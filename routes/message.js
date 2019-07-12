const express = require("express");
const router = express.Router();

const Message = require("../models/Message");
const Tandem = require("../models/Tandem");

const { checkLogin } = require("../middlewares");

const nodemailer = require("nodemailer");
const transporter = require("../mailer/transporter");

const newMessageTemplate = require("../mailer/newMessageTemplate")

router.post("/create/:tandemId", checkLogin, (req, res, next) => {
  let tandemId = req.params.tandemId;
  let message = req.body.message;
  let user = req.user;
  let userId = user.id;

  Message.create({
    _creator: userId,
    _tandem: tandemId,
    content: message,
    postedBy: user.firstName
  }).then(message => {
    Tandem.findById(tandemId)
      .populate("_proposer")
      .populate("_proposedTo")
      .then(tandem => {
        let emailRecipient = "";
        let messageCreator = "";
        let linkToTandem = `http://localhost:3005/tandem/details/${tandemId}`
        console.log(message._creator)
        console.log(tandem._proposer)
        if (message._creator.toString() === tandem._proposer._id.toString()) {
          emailRecipient = tandem._proposedTo.email;
          messageCreator = tandem._proposer.firstName
        } else {
          emailRecipient = tandem._proposer.email;
          messageCreator = tandem._proposedTo.firstName
        }
        transporter.sendMail({
          to: emailRecipient,
          subject:`${messageCreator} sent you a new Message!`,
          text: newMessageTemplate(messageCreator, tandemId),
          html: newMessageTemplate(messageCreator, tandemId)
        });
      });
    res.redirect("/tandem/details/" + tandemId);
  });
});



module.exports = router;
