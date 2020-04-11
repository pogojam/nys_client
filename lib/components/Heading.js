import styled from "styled-components";
import Theme from "../theme";
import { changeTo, withProps } from "../util";
import dumpStyles from "./style_templates";

const { headings: styles } = Theme;

const Heading = ({ type, ...props }) => {
  switch (type) {
    case "Small":
      return withProps(changeTo(Small, "h3"), props);
    case "Sub":
      return withProps(changeTo(Sub, "h2"), props);
      break;
    case "Big":
      return withProps(changeTo(Big, "h1"), props);
      break;
    default:
      return withProps(Standard, props);
  }
};

const Base = styled.h1`
  ${dumpStyles(styles)}
`;

const Sub = styled(Base)`
  ${dumpStyles(styles.sub)}
`;

const Small = styled(Base)`
  ${dumpStyles(styles.small)}
`;
const Big = styled(Base)`
  ${dumpStyles(styles.big)}
`;

const Standard = styled(Base)``;

export default Heading;
