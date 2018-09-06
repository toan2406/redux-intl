import invariant from 'invariant';

let __DefaultComponent;

export const setDefaultComponent = Component =>
  (__DefaultComponent = Component);

export const getDefaultComponent = () => {
  invariant(__DefaultComponent, '[Redux Intl] Default component is not set.');
  return __DefaultComponent;
};
