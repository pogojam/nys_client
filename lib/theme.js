// Legend
// p1 = Primary
// c1 = Contrast
// c = color
// px = Padding X
// py = Padding Y
// mx = Margin X
// my = Margin Y
// ff = FontFamily
// fw = FontWeight
// fs = FontSize
// bdr = Border Radius
// bc = Background Color
// bdc = Border Color

// Presets
const Dark = {
  c: "white",
  c1: "black",
  bc: "transparent",
  bdc: "white",
};

const colors = {
  p1: "white",
  p2: "#494949",
  p3: "#90909073",
  p4: "#060633",
  c1: "black",
  c2: "#7C7A7A",
  c3: "#FB3640",
};

// Component style handles
const buttons = {
  c: colors.p3,
  ff: "'Poiret One', cursive",
  tiny: {
    ...Dark,
    py: ".4em",
    px: ".6em",
    bdr: "3px",
  },
  small: {
    ...Dark,
    px: "2.6em",
    py: ".6em",
    mx: ".3em",
    bdr: "3px",
  },
  big: {},
  nav: {
    ...Dark,
    ff: "'Poiret One', cursive",
    c: "white",
    bdc: "transparent",
    fs: "1.2em",
    mx: "1em",
    py: "3px",
    my: "3px",
  },
};

const headings = {
  ff: "'Work Sans', sans-serif",
  fw: "bold",
  fs: "4em",
  my: "10px",
  small: {
    ff: "'Poiret One', cursive",
    fs: ".9em",
    my: "0",
    mx: "1em",
  },
  sub: {
    fw: "100",
    fs: "1.5em",
  },
  big: {
    ff: "'Anton', sans-serif",
    fs: "4em",
  },
};

const cards = {};

const modal = {};

const form = {
  input: {
    bc: "transparent",
  },
  subcontainer: {
    bdr: "6px",
    bdc: "white",
    px: "1em",
    py: "1em",
    my: "3em",
    icons: {},
    items: {
      my: "1em",
    },
  },
};

const theme = {
  colors,
  buttons,
  cards,
  headings,
  modal,
  form,
};

export default theme;
