import React from 'react';

const getState = jest.fn();

export const connect = mapStateToProps => Component => props => (
  <Component {...{ ...props, ...mapStateToProps(getState()) }} />
);

export const __setState = state => getState.mockReturnValue(state);
