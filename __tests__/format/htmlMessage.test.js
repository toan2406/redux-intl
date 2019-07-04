import React from 'react';
import { mount } from 'enzyme';
import { injectIntl } from '../../lib/index.es.js';

const intlConfig = {
  locale: 'en',
  messages: {
    greeting: 'Hello {name}!',
  },
};

describe('format HTML message', () => {
  it('formats HTML message properly', () => {
    const Strong = ({ children }) => <b>{children}</b>;
    const Component = ({ intl }) => (
      <span>
        {intl.formatHTMLMessage(
          { id: 'greeting' },
          { name: <Strong>world</Strong> },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hello world!');
    expect(wrapper.html()).toEqual('<span>Hello <b>world</b>!</span>');
  });

  it('fallbacks to formatMessage', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatHTMLMessage({ id: 'greeting' }, { name: 'world' })}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hello world!');
    expect(wrapper.html()).toEqual('<span>Hello world!</span>');
  });
});
