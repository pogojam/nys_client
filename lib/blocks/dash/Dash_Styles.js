import styled from "styled-components";
import { Layout } from "../../components";

const { Container, Body } = Layout;

export const Dash_Container = styled(Container)`
  .Dash_Block {
    button {
      color: black;
      border-color: black;
    }

    & > * {
      border: 1px solid;
      border-radius: 3px;
      margin: 20px;
      padding: 1em;
      box-shadow: -1px 3px 9px 0px rgba(0, 0, 0, 0.38);
    }
  }
`;

export const Dash_View_Players_Styles = styled.div`
  display: grid;
  text-align: center;
  /* Layout Components */
  .Player_Card_Button_Group {
    grid-template-columns: 1fr 3fr 3fr;
    display: grid;
  }

  button {
    color: black;
    border-color: black;
  }
  /* Team Schedule Calendar Component */
  .Calendar_Entry {
    max-height: 40vh;
    overflow: scroll;
    padding: 1em;
  }
  .Calendar_Event_Teams {
    display: grid;
    justify-content: center;
  }
  .Calendar_Event_Container {
    margin-top: 0;
    margin-bottom: 0;
  }

  .Calendar_Event_Teams {
    display: flex;
    justify-content: space-around;
  }
  .Calendar_Day_Container {
    padding: 1em;
    margin-bottom: 1em;
    margin-top: 1em;
    background-color: #b7abb538;
    border-radius: 5px;
  }

  .Calendar_Event_Venue_Heading {
    border-bottom: 1px solid black;
    padding: 1em;
    max-width: 200px;
    margin: auto;
  }

  /* Player Components */
  .Player_Entry {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Shirt_Icon {
    margin-top: 3em;
    margin-bottom: 3em;
  }
`;

export const Dash_View_Schedule_Styles = styled.div`
  @media (max-width: 800px) {
    .Calendar_Entry {
      flex-direction: column;
    }
  }

  .Calendar_Entry {
    display: flex;
  }
`;

export const Dash_View_Billing_Styles = styled.div``;

export const User_Overview_Styles = styled(Container)`
  color: black;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
  height: initial;
  border-bottom: 1px solid;
  opacity: 0.5;

  h3 {
    border-left: 1px solid;
    padding-left: 10px;
  }

  & > * {
    display: flex;
    align-items: center;
  }
`;

export const Team_List_Styles = styled.div`
  .Team_List_SubContainer {
    display: flex;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 3px;
    border: 1px solid;
  }
`;

export const Dash_Body_Styles = styled(Body)`
  background-color: #e5dee8;
  .Dash_View {
    display: flex;
    .Dash_View_Nav {
      color: black;
      position: relative;
      border-right: 1px solid;

      .Dash_View_Nav_Caption {
        margin-left: 2em;
        padding-top: 3em;
        opacity: 0.7;
        padding-bottom: 3em;
        font-size: 0.5em;
        & > * {
          padding: 0;
          margin: 0;
        }
      }

      .Dash_View_Nav_Controlls {
        padding-top: 1em;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-top: 1px solid black;
        button::after {
          background-color: black;
        }
        & > * {
          color: black;
          text-align: left;
        }
      }
    }
    .Dash_View_SubContainer {
      color: black;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
    }
  }
`;
