const { GraphQLModule } = require("@graphql-modules/core");
const UserModule = require("./UserModule");
const SeasonModule = require("./SeasonModule");
const PlayerModule = require("./PlayerModule");
const TeamModule = require("./TeamModule");
const SportModule = require("./SportModule");
const CoachModule = require("./CoachModule");
const LeagueModule = require("./LeagueModule");

const AppModule = new GraphQLModule({
  imports: [
    CoachModule,
    SportModule,
    TeamModule,
    PlayerModule,
    UserModule,
    SeasonModule,
    LeagueModule
  ]
});

module.exports = AppModule;
