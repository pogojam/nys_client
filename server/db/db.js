const mongoose = require("mongoose");

const Database = {
  init: DB_PATH => {
    mongoose.connect(DB_PATH, { useNewUrlParser: true }).then(({ err }) => {
      mongoose.set("useFindAndModify", false);
      console.log("DB up");
    });
  }
};

module.exports = Database;
