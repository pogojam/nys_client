const { GraphQLModule } = require("@graphql-modules/core");
const gql = require("graphql-tag");

const Resolvers = {
  Query: {
    players: (obj, args, { getPlayer, id }) => {
      console.log("dsd");
    }
  },
  Mutation: {
    updatePlayer: (obj, arg, { model, sessionID }) => {
      console.log(obj);
    }
  },
  User: {
    players: (obj, arg, { model }) => {
      console.log(arg);
      return model.findById(obj.id).then(e => (!e ? [] : e));
    }
  }
};

const PlayerModule = new GraphQLModule({
  typeDefs: gql`
    extend type Query {
      players(first: Int): [Player]
    }
    extend type Mutation {
      updatePlayer(input: playerInput): Player
    }

    type Player {
      id: ID
      name: String
      dob: DATE
      leagues: [League]
      teams: [Team]
    }

    input playerInput {
      id: ID
      name: String
      dob: DATE
    }
  `,
  context: ({ models, auth }, moduleSessionInfo) => {
    let id = null;

    if (typeof auth !== "undefined") {
      id = auth.id;
    }
    return {
      sessionID: id,
      model: models.player
    };
  },
  resolvers: Resolvers
});

module.exports = PlayerModule;
