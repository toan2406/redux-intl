import React from 'react';
import { mount } from 'enzyme';
import { injectIntl, addLocaleData } from '../../lib/index.es.js';
import vi from '../../locale-data/vi';

addLocaleData(vi);

const intlConfig = {
  locale: 'vi',
  formats: {
    number: {
      coverage: {
        style: 'percent',
      },
    },
  },
};

describe('format number', () => {
  it('formats number with global configs', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatNumber(0.5, {
          format: 'coverage',
        })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('50%');
  });

  it('formats number with user configs', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatNumber(5000, {
          style: 'currency',
          currency: 'VND',
          currencyDisplay: 'symbol',
        })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('₫ 5,000');
  });
});
