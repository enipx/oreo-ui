// @defaults
export const animationDefaults = {
  duration: '500ms',
};

// @fade
export const fade = () => {
  const ins = `
    from { opacity: 0; }
    to { opacity: 1; }
  `;

  const out = `
    from { opacity: 1; }
    to { opacity: 0; }
  `;

  return { in: ins, out };
};

// @fade top
export const fadeTop = () => {
  const ins = `
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-3rem);
    }
  `;

  return { in: ins, out };
};

// @fade left
export const fadeLeft = () => {
  const ins = `
    from {
      opacity: 0;
      transform: translateX(-3rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-3rem);
    }
  `;

  return { in: ins, out };
};

// @fade right
export const fadeRight = () => {
  const ins = `
    from {
      opacity: 0;
      transform: translateX(3rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  const out = `
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(3rem);
    }
  `;

  return { in: ins, out };
};
