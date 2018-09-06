import { intlReducer, changeLocaleAction } from '../lib/index.es.js';

describe('intlReducer', () => {
  it('returns current state', () => {
    const action = { type: 'FOO' };
    const nextState = intlReducer.intl(undefined, action);
    expect(nextState).toEqual({
      locale: null,
      messages: {},
      formats: {},
    });
  });

  it('updates state', () => {
    const action = changeLocaleAction({
      locale: 'vi',
      messages: {
        greeting: 'Xin chao!',
      },
    });
    const nextState = intlReducer.intl(undefined, action);
    expect(nextState).toEqual({
      locale: 'vi',
      messages: {
        greeting: 'Xin chao!',
      },
    });
  });
});
