import { useReducer, useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Card } from "../lib/blocks/";
import Reducer from "../lib/reducers";
import useObserver from "../lib/interface/useObserver";
import { Button, Heading, Modal, Layout } from "../lib/components";
import { buildThresholdList } from "../lib/util";
import { animated, useSpring, useTrail } from "react-spring";
import { Login_Form, User_Registration_Form } from "../lib/forms/Forms";
import { FadeIn_Wrapper } from "../lib/animations/spring";
import withAuth from "../lib/interface/withAuth";
import {
  Container_2_Styles,
  Container_1_Styles,
} from "../lib/blocks/home/Index_Styles";
const { Body, Viewport_Container } = Layout;

const initalState = {
  scrolled: false,
  modal: false,
};
const Forms = { Login_Form, User_Registration_Form };

function HomePage({ user }) {
  const [store, dispatch] = useReducer(Reducer.HomePage, initalState);
  const [formType, setForm] = useState();
  const Modal_Form = Forms[formType];
  useEffect(() => {
    window.scrollY > 0 && dispatch({ type: "SCROLLED" });
  }, []);
  return (
    <Body>
      <Nav
        fixed={true}
        setForm={setForm}
        isLoggedIn={user}
        show={store.scrolled}
        dispatch={dispatch}
      />
      <Container_1 store={store} dispatch={dispatch} />
      <Container_2 store={store} dispatch={dispatch} />
      {/* <Container_3 /> */}
      {store.modal && (
        <Modal
          show={store.modal}
          hideModal={() => dispatch({ type: "HIDE_MODAL" })}
          type="center"
          backdrop={true}
        >
          <Modal_Form />
        </Modal>
      )}
    </Body>
  );
}

const Container_1 = ({ dispatch, store }) => {
  const [ref, entries] = useObserver({
    threshold: buildThresholdList(20),
  });

  const [{ opacity }, setAnim] = useSpring(() => {
    return { opacity: 1 };
  });

  const isIntersecting = entries.isIntersecting;

  useEffect(() => {
    const Scrolled_Threshold = 0.1;
    if (isIntersecting) {
      const ir = entries.intersectionRatio;
      ir < Scrolled_Threshold &&
        !store.scrolled &&
        dispatch({ type: "SCROLLED" });
      ir > Scrolled_Threshold &&
        store.scrolled &&
        dispatch({ type: "NOT_SCROLLED" });

      //Set Animations
      setAnim({
        opacity: ir < 0.6 || store.scrolled ? 0 : ir,
      });
    }
  }, [store.scrolled, entries.intersectionRatio]);

  return (
    <Container_1_Styles ref={ref}>
      <img
        className="Splash_Logo"
        src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1556240214/General_Icons/NYS_Logo.png"
      />
      <animated.div className="Splash_Image" style={{ opacity }} />
      <div className="Splash_Nav_Container">
        <animated.div
          style={{ opacity }}
          className="Splash_Nav_Container_SubContainer"
        >
          <Heading type="Big">Spring</Heading>
          <Heading type="Sub">Register Today</Heading>
          <Button type="Small">Sign Up</Button>
          <Button onClick={() => dispatch({ type: "SHOW_LOGIN" })} type="Small">
            Login
          </Button>
        </animated.div>
      </div>
    </Container_1_Styles>
  );
};

const Background_Stripe = animated(styled.div`
  position: absolute;
  height: 15vh;
  width: 500vw;
  top: 0;
  transform: rotate(40deg) translate(0%, ${({ index }) => index * 500}%);
  will-change: opacity;
  background-color: ${({ index }) =>
    index % 2 === 0 ? "#ffffff1f" : "#0e0d0d38"};
`);

const Container_2 = ({ store }) => {
  const fadeIn = useTrail(10, { opacity: store.scrolled ? 1 : 0 });
  const [ref, entries] = useObserver({
    threshold: buildThresholdList(40),
  });

  const [swoopIn, setAnim] = useSpring(() => ({
    xy: [0, 0],
  }));

  const calcWave = (range, wl) => {
    const x = range;
    const y = range;
    return [0, 0];
  };

  useEffect(() => {
    const isIntersecting = entries.isIntersecting;
    if (isIntersecting) {
      const ir = entries.intersectionRatio;
      const range = (ir - 0.5) * entries.boundingClientRect.height;
      const wl = entries.boundingClientRect.width / 3;
      setAnim({
        xy: calcWave(range, wl),
      });
    }
  });

  return (
    <Viewport_Container
      style={{
        background: "whtie",
        height: "100%",
      }}
    >
      <Container_2_Styles>
        {/* <div className="Heading_Container">
          <animated.div
            className="Heading_Container_Headings"
            style={{
              transform: swoopIn.xy.interpolate(
                (x, y) => `translate(${x}px,${y}px)`
              ),
            }}
          >
            <Heading type="Big">The Best</Heading>
            <Heading type="Big">League In</Heading>
            <Heading type="Big">Scottsdale</Heading>
          </animated.div>
        </div> */}
        <div className="Card_Background_Container">
          <div className="Card_Container">
            <FadeIn_Wrapper>
              <Card
                title="Awards"
                background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586905436/NationalYouthSports/ball-basketball-basketball-court-basketball-hoop-1752757.jpg"
                caption={
                  "GYS is part of the ONLY major multi-sport league based in the east valley!"
                }
                button={<Button type="Small">Join Us</Button>}
              />
            </FadeIn_Wrapper>
            <FadeIn_Wrapper className="Cards_Wrapper Double">
              <Card
                background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586910899/a-boy-seated-holding-a-basket-ball.jpg"
                title="Believe"
                caption=""
              />
              <Card
                background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586593941/NationalYouthSports/johann-rosch-JgDjK1c4UIU-unsplash.jpg"
                title="Fulfillment"
              />
            </FadeIn_Wrapper>
            <FadeIn_Wrapper></FadeIn_Wrapper>
            <FadeIn_Wrapper>
              <Card
                background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586594243/NationalYouthSports/ben-hershey-Ql2n3JsUpww-unsplash.jpg"
                title="Modern"
              />
            </FadeIn_Wrapper>
          </div>
          <div className="Background_Container">
            <div className="Background_Sub_Container">
              <Background_Stripe style={fadeIn[5]} index={1} />
              <Background_Stripe style={fadeIn[6]} index={2} />
              <Background_Stripe style={fadeIn[7]} index={3} />
              <Background_Stripe style={fadeIn[8]} index={4} />
              <Background_Stripe style={fadeIn[9]} index={5} />
            </div>
          </div>
        </div>
      </Container_2_Styles>
    </Viewport_Container>
  );
};

const Container_3_Styles = styled.div`
  background: beige;
  height: 100%;
`;

const Container_3 = () => {
  return (
    <Viewport_Container>
      <Container_3_Styles></Container_3_Styles>
    </Viewport_Container>
  );
};

export default withAuth(HomePage);
