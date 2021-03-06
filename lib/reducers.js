import axios from "axios";
let prevState = {};

function HomePage(state, action) {
  switch (action.type) {
    case "SCROLLED":
      return Object.assign({}, state, { scrolled: true });
    case "NOT_SCROLLED":
      return { scrolled: false };
    case "SHOW_MODAL":
      prevState = state;
      return { modal: true };
    case "HIDE_MODAL":
      return { modal: false, ...prevState };
    default:
      return state;
  }
}

function DashPage(state, action) {
  switch (action.type) {
    case "LOGOUT":
      return { loggedIn: false };
    case "SHOW_MODAL":
      return { modal: true, input: action.input };
    case "HIDE_MODAL":
      return { modal: false, ...prevState };
      break;
    default:
      return state;
  }
}
function Form(state, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { modal: true };
    case "HIDE_MODAL":
      return { modal: false, ...prevState };
      break;
    default:
      return state;
  }
}

const reducer = {
  HomePage,
  DashPage,
};

export default reducer;
