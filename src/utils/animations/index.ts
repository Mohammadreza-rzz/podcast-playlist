//all animation variant object

export const cartlVarient = {
  initial: {
    transition: {
      duration: 0.1,
      ease: [1, 1, 1, 1],
    },
  },
  active: {
    width: "505px",
    transition: {
      duration: 0.1,
      ease: [1, 1, 1, 1],
    },
  },
};
export const longCartWrapperVariants = {
  initial: {
    width: "1478px",
    transition: { duration: 0.5 },
    ease: [1, 1, 1, 1],
  },
  active: {
    width: "1028px",
    transition: {
      duration: 0.5,
      ease: [1, 1, 1, 1],
    },
  },
};

export const sideModalVarient = {
  initial: {
    width: "0px",
    opacity: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 400,
      damping: 50,
    },
  },
  active: {
    width: "450px",
    opacity: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

export const fadeInVariant = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  active: {
    opacity: 1,
    y: "-25%",
  },
};
