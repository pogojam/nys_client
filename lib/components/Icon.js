import Soccer_Svg from "../static/Soccer_Ball_Background";
import Shirt_Svg from "../static/shirt";
import { withProps } from "../util";
import {
  FiMail,
  FiCalendar,
  FiCreditCard,
  FiChevronRight,
  FiChevronDown,
  FiPhone,
  FiMessageCircle,
  FiClock,
  FiPlus,
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

const Shirt = ({ size }) => {
  const Container = styled.div`
    position: relative;
    width: 48px;
    height: 40px;

    .Shirt_Size {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(20px, 0px);
    }
  `;

  return (
    <Container className="Shirt_Icon">
      <Shirt_Svg />
      <p className="Shirt_Size">{size}</p>
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
    case "clock":
      return withProps(FiClock, props);
      break;
    case "shirt":
      return withProps(Shirt, props);
      break;
    case "plus":
      return withProps(FiPlus, props);
      break;
  }
};
export default Icon;
