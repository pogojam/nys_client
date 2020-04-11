// React Spring Animations
const slideInRight = (state) => ({
  transform: `translateX(${state ? 0 : -100}%)`,
});

const slideInDown = (state) => ({
  transform: `translateY(${state ? 0 : -100}%)`,
});

const slideInLeft = (state) => ({
  transform: `translateX(${state ? 0 : 100}%)`,
});

const slideInBottom = (state) => ({
  transform: `translateY(${state ? 0 : 100}%)`,
});
const fadeIn = (state) => ({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const spring = {
  fadeIn,
  slideInBottom,
  slideInDown,
  slideInLeft,
  slideInRight,
};

export default spring;
