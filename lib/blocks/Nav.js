import { useSpring, useTrail, animated } from "react-spring";
import styled from "styled-components";
import { Button, Layout } from "../components";
import { locateTo } from "../util";
import Theme from "../theme";
import { FaFacebook } from "react-icons/fa";

const { Container: Generic_Container } = Layout;
const Nav_Button = animated((props) => Button({ type: "Nav", ...props }));
const Nav_Button_Tiny = animated((props) => Button({ type: "Tiny", ...props }));

const Container = animated(styled.div`
  position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
  will-change: transform;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  backdrop-filter: blur(6px);
  background-color: #00000052;

  .Nav_SubContainer {
    position: relative;
    margin-right: 2em;
    display: flex;
    padding-bottom: 5px;
  }

  .Nav_SubContainer_Alt_Buttons {
    transform: translateY(5px);
    & > * {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }

    margin-left: auto;
    display: flex;
    align-items: center;
  }
`);

function Nav({ fixed, show, dispatch, isLoggedIn, setForm }) {
  const { y } = useSpring({
    y: show ? "translateY(0%)" : "translateY(-100%)",
  });

  const o = useTrail(6, { opacity: show ? 1 : 0 });

  const handleCLick = (type, form) => {
    setForm(form);
    dispatch({ type });
  };

  return (
    <Container fixed={fixed} style={{ transform: y }}>
      <Generic_Container className="Nav_SubContainer">
        <Nav_Button style={{ ...o[0], marginLeft: 0, willChange: "opacity" }}>
          Sports
        </Nav_Button>
        <Nav_Button style={{ ...o[1], willChange: "opacity" }}>
          {" "}
          Roster
        </Nav_Button>
        <Nav_Button style={{ ...o[2], willChange: "opacity" }}>
          Contact
        </Nav_Button>
        <div className="Nav_SubContainer_Alt_Buttons">
          <Nav_Button_Tiny
            onClick={() => handleCLick("SHOW_MODAL", "User_Registration_Form")}
            style={o[3]}
            type="Tiny"
          >
            Register
          </Nav_Button_Tiny>
          <Nav_Button_Tiny
            onClick={() =>
              isLoggedIn
                ? locateTo("/Dash")
                : handleCLick("SHOW_MODAL", "Login_Form")
            }
            style={o[4]}
            type="Tiny"
          >
            {isLoggedIn ? "Dash" : "Login"}
          </Nav_Button_Tiny>
          {isLoggedIn && (
            <Nav_Button_Tiny
              onClick={() =>
                locateTo(process.env.SERVER_ADDRESS + "/auth/logout")
              }
            >
              Logout
            </Nav_Button_Tiny>
          )}
          <FaFacebook>content</FaFacebook>
        </div>
      </Generic_Container>
    </Container>
  );
}

export default Nav;
