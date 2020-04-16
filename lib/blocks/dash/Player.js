import { Icon, Heading, Button } from "../../components";
import { Team_Overview } from "./Team";

export const Player_Card = ({
  name = "Julia",
  dob = "7-9yr",
  teams = [],
  size = "S",
}) => {
  return (
    <div className="Player_Entry ">
      <Heading type="Sub">{name}</Heading>
      <Heading type="Small">{dob}</Heading>
      <Icon size={size} type="shirt" />
      <Team_Overview />
    </div>
  );
};

export const Player_AddButton = ({ onClick }) => (
  <Button onClick={onClick} type="Small">
    <Icon type="plus" />
    Add Player
  </Button>
);
