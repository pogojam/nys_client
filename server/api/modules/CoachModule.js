const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");
const DATE = require("graphql-iso-date");

const Resolvers = {
  DATE: DATE,
  Query: {},
  Mutation: {
    makeCoach: (obj, date, { makeCoach }) => makeCoach(teams)
  }
};

const CoachModule = new GraphQLModule({
  typeDefs: gql`
    type Coach {
      teams: [Team]
    }

    extend type Mutation {
      makeCoach(teamIds: [ID]): Coach
    }
  `,
  resolvers: Resolvers
});

module.exports = CoachModule;
