import Soccer_Svg from "../static/Soccer_Ball_Background";
import { withProps } from "../util";
import {
  FiMail,
  FiCalendar,
  FiCreditCard,
  FiChevronRight,
  FiChevronDown,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";
import styled from "styled-components";

const MessageNotification = ({ messages }) => {
  const Container = styled.div`
    position: relative;
    .Message_Number {
      color: black;
      position: absolute;
      top: 55%;
      right: -100%;
      transform: translate(-50%, -50%);
      font-size: 0.9em;
      font-family: "Poiret One", cursive;
      font-weight: 900;
      margin: 0;
    }
  `;

  return (
    <Container>
      <p className="Message_Number">{messages > 0 ? messages : ""}</p>
      <FiMessageCircle
        fill={messages > 0 ? "red" : "inherit"}
        color={messages > 0 ? "red" : "inherit"}
      />
    </Container>
  );
};
const Icon = ({ type, ...props }) => {
  switch (type) {
    case "soccer":
      return (
        <Soccer_Svg
          style={{ height: "10px", width: "10px", opacity: 1 }}
          color={"black"}
        />
      );
      break;
    case "mail":
      return withProps(FiMail, props);
      break;
    case "message":
      return withProps(MessageNotification, props);
      break;
    case "card":
      return withProps(FiCreditCard, props);
      break;
    case "calendar":
      return withProps(FiCalendar, props);
      break;
    case "arrow_right":
      return withProps(FiChevronRight, props);
      break;
    case "arrow_down":
      return withProps(FiChevronDown, props);
      break;
    case "phone":
      return withProps(FiPhone, props);
      break;
  }
};
export default Icon;
