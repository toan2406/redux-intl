import React from 'react';
import { mount } from 'enzyme';
import { injectIntl } from '../../lib/index.es.js';

const intlConfig = {
  locale: 'vi',
};

describe('format time', () => {
  it('formats time properly', () => {
    const Component = ({ intl }) => (
      <span>{intl.formatTime('1990-06-24 23:59:59')}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('23:59');
  });
});
