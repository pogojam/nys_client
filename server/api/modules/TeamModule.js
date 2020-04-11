const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");

const Resolvers = {};

const TeamModule = new GraphQLModule({
  typeDefs: gql`
    type Team {
      name: String
      sport: Sport
      coach: [Coach]
      players: [Player]
    }
  `,
  resolvers: Resolvers
});

module.exports = TeamModule;
