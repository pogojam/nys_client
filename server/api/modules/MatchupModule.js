const { GraphQLModule } = require("@graphql-modules/core")
const gql = require('graphql-tag')

const Resolvers = {
    Query:{
        
    },
    Mutation:{
    
    }
}


const UserModule = new GraphQLModule({
  typeDefs: gql`
extend type Query{

}

extend type Mutation{

}

  `,
  resolvers: Resolvers
})

module.exports = MatchupModule