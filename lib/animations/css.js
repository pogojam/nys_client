import styled, { keyframes } from "styled-components";

export const rotate = (pos1, pos2) => keyframes`
  from {
    transform: rotate(0deg) translate(${pos1[0]}%,${pos1[1]}%) ;
  }

  to {
    transform: rotate(360deg) translate(${pos2[0]}%,${pos2[1]}%) ;
  }
`;

export const fadeIn = () => keyframes`
  from {
   opacity:0;
  }

  to {
    opacity:1
  }
`;

const css = {
  fadeIn,
  rotate,
};

export default css;
