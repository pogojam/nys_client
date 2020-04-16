import { useReducer } from "react";
import Reducer from "../lib/reducers";
import { useEffect } from "react";
import { withAuth, useNav } from "../lib/interface";
import { Layout, Modal, Heading } from "../lib/components";
import { Nav } from "../lib/blocks";
import { User_Overview } from "../lib/blocks/dash/User";
import { Dash_Views } from "../lib/blocks/dash/";
import { useTransition, animated } from "react-spring";
import { Dash_Body_Styles } from "../lib/blocks/dash/Dash_Styles";
const { Container, Wrapper } = Layout;

const initalState = {
  loggedIn: false,
};

const Dash = ({ user }) => {
  const [store, dispatch] = useReducer(Reducer.DashPage, initalState);
  const { firstName, lastName } = user;
  const Views = user.role.includes("Admin")
    ? Dash_Views.Admin_View
    : Dash_Views.User_View;
  const [NavButtons, _, view_name] = useNav(Views, "DASH_NAV");

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

  console.log(store.modal);

  return (
    <Dash_Body_Styles>
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
                {Views[item]({ dispatch, store })}
              </animated.div>
            );
          })}
        </Container>
      </Wrapper>
      {store.modal && (
        <Modal
          backdrop={true}
          hideModal={() => dispatch({ type: "HIDE_MODAL" })}
        >
          <store.input />
        </Modal>
      )}
    </Dash_Body_Styles>
  );
};

export default withAuth(Dash, <div>content</div>);
