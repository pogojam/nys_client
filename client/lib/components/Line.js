import styled from "styled-components";
import { withProps } from "../util";

const Line = ({ type, ...props }) => {
  switch (type) {
    case "Vertical":
      return withProps(Vertical, props);
      break;
    case "Horizontal":
      return withProps(Horizontal, props);
      break;
    default:
      return withProps(Vertical, props);
  }
};

const Horizontal = styled.div`
  height: 1px;
  background: black;
  width: 60px;
`;

const Vertical = styled.div`
  width: 1px;
  background: black;
  height: 100%;
`;

export default Line;
