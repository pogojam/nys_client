import styled from "styled-components";
import { Icon, Heading, Line, Layout } from "../../components/";

const { Container } = Layout;

const User_Overview = ({
  name = "",
  email = "",
  homePhone = "",
  players = [],
}) => {
  return (
    <Container className="Dash_Overview">
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
    </Container>
  );
};

export default User_Overview;
