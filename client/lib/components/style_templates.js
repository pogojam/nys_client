const templates = {
  ff: "font-family",
  fs: "font-size",
  px: ["padding-right", "padding-left"],
  py: ["padding-top", "padding-bottom"],
  my: ["margin-top", "margin-bottom"],
  mx: ["margin-left", "margin-right"],
  fw: "font-weight",
  bc: "background-color",
  bdc: "border-color",
  bdr: "border-radius",
  c: "color",
};

const dumpStyles = (theme) => {
  if (!theme) {
    console.error("Please pass in a theme to dump styles");
    return;
  }

  const themeKeys = Object.keys(theme);
  const dump = themeKeys.reduce((acc, themeKey, i) => {
    const templateKeys = Object.keys(templates);
    const templateVal = templates[themeKey];

    if (!templateKeys.includes(themeKey)) return acc;
    if (typeof templateVal === "object") {
      return (acc =
        acc +
        templateVal[0] +
        ":" +
        theme[themeKey] +
        `;` +
        templateVal[1] +
        ":" +
        theme[themeKey] +
        `;`);
    } else {
      return (acc = acc + templateVal + ":" + theme[themeKey] + `;`);
    }
  }, "");
  return dump;
};

export default dumpStyles;
