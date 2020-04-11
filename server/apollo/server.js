const { ApolloServer } = require("apollo-server-express");
const AppModule = require("../api/modules/AppModule");
const models = require("../db/models/");

const apollo = new ApolloServer({
  modules: [AppModule],
  context: ({ req }) => {
    return {
      auth: req.user,
      models: models
    };
  }
});

module.exports = apollo;
