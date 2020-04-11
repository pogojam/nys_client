import styled from "styled-components";
import { FiUser, FiLock } from "react-icons/fi";
import { withProps } from "../util";
import dumpStyles from "./style_templates";
import Theme from "../theme";

const styles = Theme.form;

const Container = (props) => {
  return withProps(BaseContainer, props);
};
const BaseContainer = styled.form`
  ${dumpStyles(styles)}
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .Form_Icon {
    ${dumpStyles(styles.icons)}
  }

  .Form_SubContainer {
    background-color: #1b1b1b;
    border: 2px solid;
    ${dumpStyles(styles.subcontainer)}
    & > * {
      ${dumpStyles(styles.subcontainer.items)}
    }
  }

  input {
    ${dumpStyles(styles.input)}
    margin-bottom:1em;
  }

  .Input_Short {
    max-width: 20px;
  }

  label {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
`;

const Form = {
  Container,
};

export default Form;
