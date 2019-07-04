const generateTokenFactory = uid => {
  let counter = 0;
  return () => `ELEMENT-${uid}-${(counter += 1)}`;
};

export { generateTokenFactory };
