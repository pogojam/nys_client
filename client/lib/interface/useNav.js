import { useState, useEffect } from "react";
import { Button } from "../components";

const useNav = (views = {}, NavName) => {
  const initalState = window.localStorage.getItem(NavName);
  const viewKeys = Object.keys(views);
  const [view_name, changeView] = useState(
    initalState ? initalState : viewKeys[0]
  );
  const [Buttons, setButtons] = useState();
  const ActiveView = views[view_name];

  useEffect(() => {
    const buttons = viewKeys.map((name) => (
      <Button
        type="Nav"
        active={name === view_name ? true : false}
        onClick={() => changeView(name)}
      >
        {name}
      </Button>
    ));
    setButtons(buttons);
    window.localStorage.setItem(NavName, view_name);
  }, [view_name]);

  return [Buttons, ActiveView, view_name];
};

export default useNav;
