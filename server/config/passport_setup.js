const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const UserModel = require("../db/models/user");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  UserModel.findById(id, (err, user) => {
    user ? done(err, user) : done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: "http://localhost:4000/auth/facebook/callback",
      profileFields: [
        "id",
        "birthday",
        "email",
        "first_name",
        "gender",
        "last_name",
        "displayName",
      ],
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      UserModel.findOne({ facebookID: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          const profileJson = profile._json;

          new UserModel({
            firstName: profileJson.first_name,
            lastName: profileJson.last_name,
            facebookID: profile.id,
            gender: profile.gender,
            email: profile.emails[0].value,
            dob: profileJson.birthday,
            role: ["Admin"],
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

module.exports = passport;
