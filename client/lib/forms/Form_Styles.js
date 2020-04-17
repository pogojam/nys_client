import styled from "styled-components";
import dumpStyles from "../components/style_templates";
import Theme from "../theme";

const styles = Theme.form;

const Base_Container = styled.form`
  ${dumpStyles(styles)}
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .Form_Icon {
    ${dumpStyles(styles.icons)}
  }

  .Form_SubContainer {
    margin: 0;
    border: 2px solid;
    ${dumpStyles(styles.subcontainer)}
    & > * {
      ${dumpStyles(styles.subcontainer.items)} & > * {
        margin: 0;
        margin-left: 1em;
        margin-right: 1em;
      }
    }

    input {
      ${dumpStyles(styles.input)}
      margin-bottom:1em;
      color: white;
    }

    .Input_Short {
      max-width: 20px;
    }

    label {
      margin-right: 0.5em;
      margin-left: 0.5em;
    }
  }
`;

export const User_Registration_Styles = styled(Base_Container)`
  .Form_SubContainer {
    margin: 0;
    background-color: #1b1b1b;
    font-family: "Work Sans", sans-serif;

    @media (max-width: 600px) {
      .Form_Block {
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
      }
    }
  }
  .Form_Block {
    font-size: 0.8em;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr;
  }
`;

export const Login_Styles = styled(Base_Container)`
  .Form_SubContainer {
    background-color: #1b1b1b;
  }
  input {
    margin: 0;
  }
  .Form_Icon,
  .Form_Submit {
    margin-left: 0;
  }

  .Form_Block {
    font-size: 0.8em;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
`;

export const User_Billing_Styles = styled.div`
  max-height: 40vh;
  max-width: 50vh;

  .Form_SubContainer {
    background-color: none;
  }

  .Form_Block {
    font-size: 0.8em;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .Stripe_Card_Container {
    padding: 4px;
    margin-top: 7px;
    margin-bottom: 7px;
    border-radius: 3px;
    border: 1px solid black;
  }
  button {
    margin-left: 0;
  }
`;
