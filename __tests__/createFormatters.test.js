import { createFormatters } from '../lib/index.es.js';

const intlConfig = {
  locale: 'en',
  formats: {
    date: {
      leave: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    },
  },
};

describe('createFormatters', () => {
  it('well, just works properly', () => {
    const intl = createFormatters(intlConfig);
    expect(intl.locale).toBe('en');
    expect(intl.formats.date.leave.month).toBe('short');
    expect(intl.formatDate('2016-02-27', { format: 'leave' })).toEqual(
      'Feb 27, 2016',
    );
  });
});
