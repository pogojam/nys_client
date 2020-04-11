const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");

const Resolvers = {
  Query: {},
  Mutation: {
    makeLeague: (obj, data, { model }) => model.makeLeague(data, obj)
  }
};

const LeaugeModule = new GraphQLModule({
  typeDefs: gql`
    extend type Query {
      League(input: Sort): [League]
    }
    extend type Mutation {
      makeLeague(input: LeagueInput): League
    }

    input LeagueInput {
      seasonID: ID!
      name: String
      ageStart: DATE
      ageEnd: DATE
      discription: String
      rules: String
    }
    type League {
      name: String
      ageStart: DATE
      ageEnd: DATE
      discription: String
      rules: String
    }
  `,
  resolvers: Resolvers,
  context: ({ models, auth }) => {
    return {
      auth,
      model: models.leagues
    };
  }
});

module.exports = LeaugeModule;
