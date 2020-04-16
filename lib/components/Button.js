import styled from "styled-components";
import Theme from "../theme";
import { withProps } from "../util";
import dumpStyles from "./style_templates";

const { buttons: styles } = Theme;

const Button = ({ type, ...props }) => {
  switch (type) {
    case "Big":
      return withProps(Big, props);
      break;
    case "Small":
      return withProps(Small, props);
      break;
    case "Tiny":
      return withProps(Tiny, props);
      break;
    case "Nav":
      return withProps(Nav, props);
      break;
    default:
      return withProps(Base, props);
  }
};
const Base = styled.button`
  &:focus {
    outline: none;
  }
  ${dumpStyles(styles)}
`;
const Small = styled(Base)`
  transition: background-color 0.6s linear;
  &:hover {
    background-color: #3d4ae61a;
  }

  ${dumpStyles(styles.small)}
`;
const Tiny = styled(Base)`
  ${dumpStyles(styles.tiny)}
`;
const Big = styled(Base)`
  ${dumpStyles(styles.big)}
`;

const Nav = styled(Base)`
  position: relative;
  ${dumpStyles(styles.nav)}
  letter-spacing: 6px;
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 1px;
    opacity: 0;
    width: 100%;
    background-color: white;
    transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:focus {
    outline: none;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export default Button;
