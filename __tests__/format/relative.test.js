import React from 'react';
import { mount } from 'enzyme';
import { injectIntl, addLocaleData } from '../../lib/index.es.js';
import vi from '../../locale-data/vi';

addLocaleData(vi);

const ONE_DAY = 24 * 3600 * 1000;
const ONE_WEEK = ONE_DAY * 7;
const intlConfig = {
  locale: 'vi',
  formats: {
    relative: {
      announcement: {
        style: 'best fit',
      },
    },
  },
};

describe('format relative', () => {
  it('formats relative time properly', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatRelative(Date.now() - ONE_DAY, {
          format: 'announcement',
        })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hôm qua');
  });

  it('formats relative time with user configs', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatRelative(Date.now() - ONE_WEEK, {
          now: Date.now() - ONE_DAY * 5,
          style: 'numeric',
          units: 'hour',
        })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('48 giờ trước');
  });
});
