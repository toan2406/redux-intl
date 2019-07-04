import React from 'react';
import configureStore from 'redux-mock-store';
import { Intl, changeLocaleAction } from '../../lib/index.es.js';

const middlewares = [];
const mockStore = configureStore(middlewares);

const enConfig = {
  locale: 'en',
  messages: {
    greeting: 'Hi, {name}!',
  },
};

const viConfig = {
  locale: 'vi',
  messages: {
    greeting: 'Xin chào, {name}!',
  },
};

describe('Intl helper', () => {
  let store;

  beforeEach(() => {
    store = mockStore(actions => {
      const latestAction = actions[actions.length - 1];
      if (latestAction && latestAction.payload.locale === 'vi')
        return { intl: viConfig };
      return { intl: enConfig };
    });

    Intl.setStore(store);
  });

  it('throws error if Intl is not configurated', () => {
    expect(Intl.formatMessage).toThrow();
  });

  it('formats message properly', () => {
    const enMessage = Intl.formatMessage({ id: 'greeting' }, { name: 'Toan' });
    expect(enMessage).toEqual('Hi, Toan!');

    store.dispatch(changeLocaleAction(viConfig));

    const viMessage = Intl.formatMessage({ id: 'greeting' }, { name: 'Toan' });
    expect(viMessage).toEqual('Xin chào, Toan!');
  });

  it('formats HTML message properly', () => {
    const enMessage = Intl.formatHTMLMessage(
      { id: 'greeting' },
      { name: <b>Toan</b> },
    );
    expect(enMessage[0]).toBe('Hi, ');
    expect(enMessage[1]).toMatchObject({
      type: 'b',
      props: { children: 'Toan' },
    });
    expect(enMessage[2]).toBe('!');
  });
});
