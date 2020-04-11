import { useReducer } from "react";
import Reducer from "../lib/reducers";
import styled from "styled-components";
import { useEffect } from "react";
import { withAuth, useNav } from "../lib/interface";
import { Layout, Modal, Heading } from "../lib/components";
import { Nav } from "../lib/blocks";
import { Dash_Views, User_Overview } from "../lib/blocks/dash/";
import { useTransition, animated } from "react-spring";
import Theme from "../lib/theme";
import dumpStyles from "../lib/components/style_templates";
import { FaRProject } from "react-icons/fa";

const { Body, Container, Wrapper } = Layout;
const styles = Theme.dash;

const Dash_Body = styled(Body)`
  ${dumpStyles(styles.body)}

  .Dash_Overview {
    ${dumpStyles(styles.overview)}
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    justify-content: space-between;
    height: initial;
    border-bottom: 1px solid;
    opacity: 0.5;

    h3 {
      border-left: 1px solid;
      padding-left: 10px;
    }

    & > * {
      display: flex;
      align-items: center;
    }
  }

  .Dash_View {
    display: flex;
    .Dash_View_Nav {
      ${dumpStyles(styles.nav)}
      position: relative;
      border-right: 1px solid;

      .Dash_View_Nav_Caption {
        margin-left: 2em;
        padding-top: 3em;
        opacity: 0.7;
        padding-bottom: 3em;
        font-size: 0.5em;
        & > * {
          padding: 0;
          margin: 0;
        }
      }

      .Dash_View_Nav_Controlls {
        padding-top: 1em;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-top: 1px solid black;

        & > * {
          color: black;
          text-align: left;
        }
      }
    }
    .Dash_View_SubContainer {
      color: black;
      height: 100%;
      width: 100%;
    }
  }
`;

const initalState = {
  loggedIn: false,
};

const Dash = ({ user }) => {
  const [store, dispatch] = useReducer(Reducer.DashPage, initalState);
  const { firstName, lastName } = user;
  const Views = user.role.includes("Admin")
    ? Dash_Views.Admin
    : Dash_Views.User;
  const [NavButtons, ActiveView, view_name] = useNav(Views, "DASH_NAV");

  const transitions = useTransition(view_name, (view) => view, {
    unique: true,
    from: { opacity: 0, height: "0%", transform: `translateY(1rem)` },
    enter: { opacity: 1, height: "100%", transform: `translateY(0rem)` },
    leave: { opacity: 0, height: "0%", transform: `translateY(1rem)` },
    trail: 400 / Views.length,
  });

  //Quick fix for overflow bug on __next element
  useEffect(() => {
    const tag = document.getElementById("__next");
    tag.style.height = "100vh";
    tag.style.overflow = "hidden";
  }, []);

  return (
    <Dash_Body>
      <Nav isLoggedIn={user} show={true} store={store} dispatch={dispatch} />
      <User_Overview name={firstName + " " + lastName} {...user} />
      <Wrapper className="Dash_View">
        <Modal className="Dash_View_Nav" type="left" show={true}>
          <div className="Dash_View_Nav_Caption">
            <Heading>Parent Dash</Heading>
          </div>
          <div className="Dash_View_Nav_Controlls">{NavButtons}</div>
        </Modal>
        <Container className="Dash_View_SubContainer">
          {transitions.map(({ key, props, item }) => {
            return (
              <animated.div key={key} style={props}>
                {Views[item]()}
              </animated.div>
            );
          })}
        </Container>
      </Wrapper>
    </Dash_Body>
  );
};

export default withAuth(Dash, <div>content</div>);
