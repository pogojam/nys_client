export const changeTo = (com, type) => {
  com.target = type;
  return com;
};

export const withProps = (Component, { children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export const buildThresholdList = (numSteps) => {
  let thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
};

export const locateTo = (location) => {
  window.location.href = location;
};

export const wrapComponent = (C1, C2) => {
  return ({ children, ...props }) => (
    <C2>
      <C1 {...props}>{children}</C1>
    </C2>
  );
};
