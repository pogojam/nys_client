import { useRef } from "react";
import { Heading, Button } from "../../components/";
import { Team_Overview } from "./Team";
import { Icon } from "../../components/";
import moment from "moment";

const buildWeek = (daysInWeek = "7") => {
  let week = [];
  for (let i = 0; i < daysInWeek; ++i) {
    week.push(moment().add(i, "days"));
  }
  return week;
};

const sudo_event_data = {
  time: "8pm",
  teams: [{ name: "Blue Devils" }, { name: "Hopchowda" }],
  location: "Royal Palms",
};

export const Event = ({ time, teams, location }) => (
  <div className="Calendar_Event">
    <Heading type="Small">
      <Icon className="Icon Clock" type="clock" />
      {time}
    </Heading>
    {teams && (
      <div className="Calendar_Event_Teams">
        <Team_Overview />
        vs
        <Team_Overview />
      </div>
    )}
    <Heading className="Calendar_Event_Venue_Heading" type="Small">
      {" "}
      @ {location}
    </Heading>
  </div>
);

export function Day({ date, events = [sudo_event_data] }) {
  return (
    <div className={"Calendar_Day_Container"}>
      <Heading className={"Calendar_Day_Heading"} type="Sub">
        {date}
      </Heading>
      <div className="Calendar_Event_Container">
        {events.map(({ time, teams, location }) => (
          <Event time={time} teams={teams} location={location} />
        ))}
      </div>
    </div>
  );
}

export const Calendar = ({ length, Calendar_Day = Day }) => {
  const Days = useRef(buildWeek(length));
  return (
    <div className={"Calendar_Entry"}>
      {Days.current.map((date, i) => {
        return <Calendar_Day date={date.format("dddd/D")} />;
      })}
    </div>
  );
};

export default Calendar;
