import React, { useEffect, Children } from "react";
import { useObserver } from "../interface/";
import { buildThresholdList } from "../util";
import { useSpring, animated } from "react-spring";

// React Spring Animations
export const slideInRight = (state) => ({
  transform: `translateX(${state ? 0 : -100}%)`,
});

export const slideInDown = (state) => ({
  transform: `translateY(${state ? 0 : -100}%)`,
});

export const slideInLeft = (state) => ({
  transform: `translateX(${state ? 0 : 100}%)`,
});

export const slideInBottom = (state) => ({
  transform: `translateY(${state ? 0 : 100}%)`,
});
export const fadeIn = (state) => ({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

// Wrappers

export const FadeIn_Wrapper = ({ children, ...props }) => {
  const [ref, entries] = useObserver({
    threshold: buildThresholdList(20),
  });

  const [animation, setAnimation] = useSpring(() => ({
    opacity: [0],
  }));

  useEffect(() => {
    if (entries.isIntersecting) {
      const ir = entries.intersectionRatio;
      const opacity = ir > 0.7 ? 1 : ir;
      setAnimation({
        opacity: [opacity],
      });
    }
  });

  return (
    <animated.div {...props} style={animation} ref={ref}>
      {children}
    </animated.div>
  );
};
