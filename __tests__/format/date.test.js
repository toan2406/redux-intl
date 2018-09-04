import React from 'react';
import { mount } from 'enzyme';
import { injectIntl } from '../../lib/index.es.js';

const intlConfig = {
  locale: 'en',
  formats: {
    date: {
      leave: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    },
  },
};

describe('format date', () => {
  it('formats date properly', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatDate('1990-08-01', {
          format: 'leave',
        })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('08/01/1990');
  });
});
