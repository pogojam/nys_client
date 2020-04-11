const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");
const DATE = require("graphql-iso-date");

const Resolvers = {
  DATE: DATE,
  Query: {
    getSeason: (obj, data, { getSeason, sessionID }) => getSeason(sessionID),
    getSeasons: (obj, data, { model, sessionID }) => model.getSeasons()
  },
  Mutation: {
    updateSeason: (obj, { input }, { model, sessionID }) =>
      model.updateSeason(input)
  }
};

const SeasonModule = new GraphQLModule({
  typeDefs: gql`
    scalar DATE

    input SeasonInput {
      timeOfYear: String
      startDate: DATE
      endDate: DATE
    }

    type Season {
      id: ID
      timeOfYear: String
      startDate: DATE
      endDate: DATE
      leagues: [League]
    }

    type Query {
      getSeason(id: ID): Season
      getSeasons: [Season]
    }

    extend type Mutation {
      updateSeason(input: SeasonInput): Season
    }
  `,
  resolvers: Resolvers,
  context: ({ models, auth }, moduleSessionInfo) => {
    let id = null;

    if (typeof auth !== "undefined") {
      id = auth.id;
    }
    return {
      sessionID: id,
      model: models.season
    };
  }
});

module.exports = SeasonModule;
