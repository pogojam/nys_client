import styled from "styled-components";
import { Layout, Heading } from "../../components";
import { Calendar } from "./";
const { Container } = Layout;

const billing = () => {
  return <Container>content</Container>;
};

const schedule = () => {
  return (
    <Container>
      <Heading style={{ textAlign: "right", borderBottom: "1px solid black" }}>
        Calendar
      </Heading>
      <Calendar />
    </Container>
  );
};

const players = () => {
  return <Container>content</Container>;
};

const contact = () => {
  return <Container>content</Container>;
};
const Admin = {
  billing,
  schedule,
  contact,
  players,
};

const User = {
  billing,
  schedule,
  contact,
  players,
};

const Dash_Views = {
  Admin,
  User,
};

export default Dash_Views;
