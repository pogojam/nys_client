import { Icon, Heading } from "../../components";
import { Team_List_Styles } from "./Dash_Styles";
import { Calendar, Day } from "./Calendar";

export const Team_Overview = ({
  teams = [{ name: "Red Lions", record: "3-0", sport: "soccer" }],
}) => {
  return (
    <Team_List_Styles className="Team_List_Container">
      {teams.map(({ name, record, sport }) => (
        <div className="Team_List_SubContainer">
          {name && (
            <Heading className="Team_List_Team_Heading" type="Small">
              {name}
            </Heading>
          )}
          {record && <Heading type="Small">{record}</Heading>}
          {sport && <Icon type={sport} />}
        </div>
      ))}
    </Team_List_Styles>
  );
};

const Team_Schedule_Day = ({ date, props }) => (
  <div {...props}>
    <Day date={date} />
    <Team_Overview />
  </div>
);

export const Team_Schedule = ({ className, ...props }) => {
  return (
    <div {...props} className={"Team_Schedule_Entry " + className}>
      <Calendar {...props} length={4} />
    </div>
  );
};
