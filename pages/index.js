import { useReducer, useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Card } from "../lib/blocks/";
import Reducer from "../lib/reducers";
import useObserver from "../lib/interface/useObserver";
import { Button, Heading, Modal, Layout } from "../lib/components";
import Theme from "../lib/theme";
import { buildThresholdList } from "../lib/util";
import { animated, useSpring, useTrail, useSprings } from "react-spring";
import { Cash_Sack, Computer, Hand_Slap, Horn } from "../lib/static/";
import { Login, Registration } from "../lib/forms/forms";
import withAuth from "../lib/interface/withAuth";

const { Body, Container, Viewport_Container } = Layout;

const initalState = {
  scrolled: false,
  modal: false,
};
const Forms = { Login, Registration };

function HomePage({ user }) {
  const [store, dispatch] = useReducer(Reducer.HomePage, initalState);
  const [formType, setForm] = useState();
  const Modal_Form = Forms[formType];
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
      <Container_3 />
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

const Container_1_Styles = styled.div`
  overflow: hidden;
  .Splash_Image {
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/dxjse9tsv/image/upload/v1556242581/NationalYouthSports/action-activity-athlete.jpg");
    background-size: cover;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .Splash_Logo {
    position: absolute;
    margin: 15px;
  }

  .Splash_Nav_Container {
    position: absolute;
    bottom: 0;
    max-width: 500px;
    width: 100%;

    .Splash_Nav_Background {
      position: absolute;
      background-color: ${Theme.colors.c1};
      top: 0;
      left: 0;
      width: 250vw;
      height: 300%;
    }

    .Splash_Nav_SubContainer {
      position: relative;
      padding: 20px;
    }
  }
`;

const Container_1 = ({ dispatch, store }) => {
  const [ref, entries] = useObserver({
    threshold: buildThresholdList(20),
  });

  const [{ xyr, opacity, y }, setAnim] = useSpring(() => {
    return { opacity: 1, xyr: [-32, 0, 17], y: 0 };
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
        opacity: ir,
        xyr: [-10 - 52 * ir, -10, ir * 17],
      });
    }
  });

  return (
    <Container_1_Styles>
      <Viewport_Container ref={ref}>
        <img
          className="Splash_Logo"
          src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1556240214/General_Icons/NYS_Logo.png"
        />
        <div className="Splash_Nav_Container">
          <animated.div
            className="Splash_Nav_Background"
            style={{
              transform: xyr.interpolate(
                (x, y, r) => `translate(${x}%,${y}%) rotate(${r}deg)`
              ),
            }}
          />
          <animated.div
            style={{ opacity: opacity.interpolate((val) => val) }}
            className="Splash_Nav_SubContainer"
          >
            <Heading type="Big">Spring</Heading>
            <Heading type="Sub">Register Today</Heading>
            <Button type="Small">Sign Up</Button>
            <Button
              onClick={() => dispatch({ type: "SHOW_LOGIN" })}
              type="Small"
            >
              Login
            </Button>
          </animated.div>
        </div>
        <div
          className="Splash_Image"
          style={{ opacity: store.login ? 0 : 1 }}
        />
      </Viewport_Container>
    </Container_1_Styles>
  );
};

const Container_2_Styles = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  transition: opacity 2s cubic-bezier(0.23, 1, 0.32, 1);

  .Heading_Container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    .Heading_Container_Headings {
      position: sticky;
      top: 70vh;
      margin-top: 80vh;
      white-space: pre-line;
      align-self: self-start;
      z-index: 1;
      & > * {
        margin-bottom: -45px;
      }
    }
  }

  .Card_Background_Container {
    width: 100%;
  }

  .Card_Container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
    /* margin-top: 40vh; */

    .Card {
      height: 80vh;
      /* width: 100vw; */
      margin-top: 84px;
      margin-bottom: 20rem;
      background-size: cover;
    }
    & > * {
    }
  }

  .Background_Container {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .Background_Sub_Container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

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

const Card_Anim = animated(Card);

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
        background: "black",
        height: "100%",
      }}
    >
      <Container_2_Styles>
        <div className="Heading_Container">
          <animated.div
            className="Heading_Container_Headings"
            style={{
              ...fadeIn[4],
              transform: swoopIn.xy.interpolate(
                (x, y) => `translate(${x}px,${y}px)`
              ),
            }}
          >
            <Heading type="Big">The Best</Heading>
            <Heading type="Big">League In</Heading>
            <Heading type="Big">Scottsdale</Heading>
          </animated.div>
        </div>
        <div className="Card_Background_Container">
          <div className="Card_Container">
            <Card_Anim
              title="Awards"
              background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586591862/NationalYouthSports/abigail-keenan-8-s5QuUBtyM-unsplash.jpg"
              caption={
                "GYS is part of the ONLY major multi-sport league based in the east valley!"
              }
              style={fadeIn[0]}
            />
            <Card_Anim
              background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586595987/NationalYouthSports/adria-crehuet-cano-yndHHu2kJAw-unsplash.jpg"
              title="Fun"
              style={fadeIn[1]}
              img={Hand_Slap}
            />
            <Card_Anim
              background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586593941/NationalYouthSports/johann-rosch-JgDjK1c4UIU-unsplash.jpg"
              title="Tournament"
              style={fadeIn[2]}
              img={Horn}
            />
            <Card_Anim
              background="https://res.cloudinary.com/dxjse9tsv/image/upload/v1586594243/NationalYouthSports/ben-hershey-Ql2n3JsUpww-unsplash.jpg"
              title="Modern"
              style={fadeIn[3]}
              img={Computer}
            />
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
