import { changeLocaleAction } from '../lib/index.es.js';

describe('changeLocaleAction AC', () => {
  it('creates action', () => {
    const action = changeLocaleAction({
      locale: 'vi',
      messages: {
        greeting: 'Xin chao!',
      },
    });
    expect(action).toEqual({
      type: '@@intl/CHANGE_LOCALE',
      payload: {
        locale: 'vi',
        messages: {
          greeting: 'Xin chao!',
        },
      },
    });
  });
});
