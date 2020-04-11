import { useRef } from "react";
import { Layout, Heading, Button } from "../../components/";
import moment from "moment";
import styled from "styled-components";

const { Container } = Layout;

const Calendar_Container = styled(Container)`
  .Calendar_Day_Container {
    margin-top: 2em;
  }

  .Calendar_Day_Heading {
    font-family: "Poiret One", cursive;
  }
`;

const buildWeek = () => {
  let week = [];
  const daysInWeek = 7;
  for (let i = 0; i < daysInWeek; ++i) {
    week.push(moment().add(i, "days"));
  }
  return week;
};

const Day = ({ date }) => (
  <div className={"Calendar_Day_Container"}>
    <Heading className={"Calendar_Day_Heading"} type="Sub">
      {date}
    </Heading>
  </div>
);

const Calendar = (params) => {
  const Days = useRef(buildWeek());
  console.log(Days);
  return (
    <Calendar_Container>
      {Days.current.map((day, i) => {
        return <Day date={day.format("dddd/D")} />;
      })}
    </Calendar_Container>
  );
};

export default Calendar;
