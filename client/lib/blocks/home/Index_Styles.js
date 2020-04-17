import styled from "styled-components";
import dumpStyles from "../../components/style_templates";
import Theme from "../../theme";
import { fadeIn } from "../../animations/css";

const styles = Theme.cards;

export const Index_Card_Styles = styled.div`
  position: relative;
  background: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  margin-top: 84px;
  background-size: cover;
  z-index: 1;
  .Card_SubContainer {
    padding: 2em;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  p {
    font-family: "Work Sans", sans-serif;
  }
  svg {
    min-height: 15rem;
    height: 40vh;
    height: 100%;
  }
  .Card_Img {
    height: 100%;
  }
  .Caption {
  }
  .Heading {
  }
  ${dumpStyles(styles.cards)}
`;
export const Container_1_Styles = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  .Splash_Image {
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/dxjse9tsv/image/upload/v1586905934/NationalYouthSports/woman-in-teal-jersey-1198166.jpg");
    will-change: opacity;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0%;
    left: 0%;
    z-index: -1;
    animation: ${fadeIn} 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &::before {
      content: "";
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      will-change: transform;
    }
  }

  .Splash_Logo {
    position: absolute;
    right: 48px;
    top: 48px;
  }

  .Splash_Nav_Container {
    position: absolute;
    bottom: 48px;
    left: 48px;
    max-width: 500px;
    width: 100%;
    color: black;

    button {
      color: black;
      border-color: black;
    }

    .Splash_Nav_Container_SubContainer {
      position: relative;
      padding: 20px;
    }
  }
`;

export const Container_2_Styles = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  /* transition: opacity 2s cubic-bezier(0.23, 1, 0.32, 1); */

  .Heading_Container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 12;

    .Heading_Container_Headings {
      position: sticky;
      top: 70vh;
      margin-top: 100vh;
      white-space: pre-line;
      align-self: self-start;
      z-index: 1;
      & > * {
        margin-bottom: -45px;
      }
    }
  }

  .Card_Background_Container {
    width: 100%;
  }

  .Cards_Wrapper,
  .Double {
    display: flex;
    & > * {
      flex-basis: 50%;
    }

    div:nth-child(1) {
      margin-right: 20px;
    }
    div:nth-child(2) {
      margin-left: 20px;
    }
  }

  .Background_Container {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .Background_Sub_Container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;
