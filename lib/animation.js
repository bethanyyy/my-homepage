export const pageTransition = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.3,
    },
    x: 0,
  },
  exit: {
    // opacity: 0,
    // x: -100,
    transition: {
      duration: 0.2,
    },
  },
};

export const workDetailsTransition = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.1,
    },
  },
};
