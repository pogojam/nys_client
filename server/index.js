const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const db = require("./db/db");
const apollo = require("./apollo/server");
const express = require("express");
const passport = require("./config/passport_setup");

const authRoutes = require("./api/routes/auth-routes");
const cors = require("cors");

const DB_PATH = process.env.DB_PATH;
const PORT = process.env.SERVER_PORT;
const corsOptions = {
  origin: process.env.CLIENT_ADDRESS,
  credentials: true,
};

const app = express();

db.init(DB_PATH);
// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SECRET_KEYS],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
apollo.applyMiddleware({ app, cors: corsOptions, path: "/api" });

app.listen(PORT, () => {
  console.log("Server up on " + PORT);
});
