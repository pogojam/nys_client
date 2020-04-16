import styled from "styled-components";
import React from "react";
import { animated, useSpring } from "react-spring";
import { Layout } from "./";
import Theme from "../theme";
import dumpStyles from "./style_templates";
import { slideInRight, fadeIn } from "../animations/spring";

const { Wrapper } = Layout;

const styles = Theme.modal;

const Base = styled.div`
  ${dumpStyles(Theme.modal)}
`;

const Model_Left = styled(Wrapper)`
  width: 20vw;
  position: absolute;
  left: 0;
  top: 0;
`;

const Model_Center = styled(Base)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 9999;
`;

const Model_Right = styled(Base)`
  height: 100%;
  width: 30vw;
`;

const Model_Bottom = styled(Base)`
  height: 100%;
  width: 30vw;
`;
const Model_Top = styled(Base)`
  height: 100%;
  width: 30vw;
`;

const Backdrop = animated(styled.div`
  ${dumpStyles(styles.backdrop)}
  z-index: 20;
  position: fixed;
  opacity: 0.4;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
`);

const Types = {
  top: { Container: animated(Model_Top) },
  bottom: { Container: animated(Model_Bottom) },
  right: { Container: animated(Model_Right) },
  left: { Container: animated(Model_Left), Animation: slideInRight },
  center: { Container: animated(Model_Center), Animation: fadeIn },
};

const Modal = ({
  type = "center",
  hideModal,
  show,
  backdrop = false,
  bgStyles = {},
  children,
  ...props
}) => {
  const Container = Types[type].Container;
  const setAnim = Types[type].Animation;
  const Modal_Animation = useSpring(setAnim(show));
  const Backdrop_Animation = useSpring(fadeIn(show));

  console.log(backdrop, hideModal);
  if (!hideModal) {
    console.error("No {props:hideModal} function given to Modal");
  }

  return (
    <>
      <Container show={show} style={Modal_Animation} {...props}>
        {children}
      </Container>
      {backdrop && (
        <Backdrop
          show={show}
          style={{ ...Backdrop_Animation, ...bgStyles }}
          onClick={hideModal}
        />
      )}
    </>
  );
};
export default Modal;
