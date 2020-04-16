import { Icon, Heading, Button } from "../../components";
import { User_Overview_Styles, PlayerOverview_Styles } from "./Dash_Styles";
import { Team_List } from "./Team";

export const User_Overview = ({
  name = "",
  email = "",
  homePhone = "",
  players = [],
}) => {
  return (
    <User_Overview_Styles>
      <Heading type="Small">{name}</Heading>
      {players.map(({ sport, name: n }) => (
        <>
          <Heading type="Small">{n}</Heading>
          <Icon type={sport} />
        </>
      ))}

      <span>
        <Icon type="phone" />
        <Heading type="Small">{homePhone}</Heading>
      </span>
      <span>
        <Icon type="mail" />
        <Heading type="Small">{email}</Heading>
      </span>
      <Icon type="message" messages={1} />
    </User_Overview_Styles>
  );
};
