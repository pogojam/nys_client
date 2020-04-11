const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/login", (req, res) => {
  res.json("login");
});

router.get("/logout", async (req, res) => {
  req.session = null;
  res.clearCookie("session");
  res.clearCookie("session.sig");
  return res.redirect(process.env.CLIENT_ADDRESS);
});

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["user_gender", "email", "user_birthday"],
  })
);

router.get(
  "/facebook/callback",
  (req, res) => {
    return passport.authenticate("facebook", {
      successRedirect: "http://localhost:3000/Dash",
      failureRedirect: "http://localhost:3000/Login",
    })(req, res);
  },
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
