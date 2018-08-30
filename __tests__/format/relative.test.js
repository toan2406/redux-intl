import React from 'react';
import { mount } from 'enzyme';
import { injectIntl, addLocaleData } from '../../lib/index.es.js';
import vi from '../../locale-data/vi';

addLocaleData(vi);
const intlConfig = {
  locale: 'vi',
};

describe('format relative', () => {
  it('formats relative date properly', () => {
    const Component = ({ intl }) => (
      <span>{intl.formatRelative(Date.now() - 3000)}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('3 giây trước');
  });
});
