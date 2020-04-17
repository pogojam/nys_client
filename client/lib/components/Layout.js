import styled from "styled-components";

const Body = styled.div`
  max-width: 100vw;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled(Wrapper)`
  padding-left: 48px;
  padding-right: 48px;
`;
const Viewport_Container = styled(Container)`
  height: 100vh;
  position: relative;
`;

const Layout = {
  Body,
  Container,
  Wrapper,
  Viewport_Container,
};

export default Layout;
