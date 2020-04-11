const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");

const Resolvers = {
  Query: {},
  Mutation: {}
};

const SportModule = new GraphQLModule({
  typeDefs: gql`
    type Sport {
      name: String
      rules: String
    }
  `,
  resolvers: Resolvers
});

// extend type Query{

// }

// extend type Mutation{

// }

module.exports = SportModule;
