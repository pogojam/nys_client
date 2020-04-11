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
  ${dumpStyles(styles)}
`;
const Small = styled(Base)`
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
    bottom: -5px;
    left: 0;
    height: 1px;
    width: ${({ active }) => (active ? "100px" : "15px")};
    border: 1px solid;
    background-color: inherit;
    transition: width 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:focus {
    outline: none;
  }
  &:hover {
    &:after {
      width: 100px;
    }
  }
`;

export default Button;
