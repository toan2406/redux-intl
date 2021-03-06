jest.mock('react-redux');
import React from 'react';
import { mount } from 'enzyme';
import { __setState } from 'react-redux';
import { FormattedMessage, setDefaultComponent } from '../../lib/index.es.js';

__setState({
  intl: {
    locale: 'en',
    messages: {
      greeting: 'Hello, {name}!',
    },
  },
});

describe('FormattedMessage Component', () => {
  it('throws if no default component set', () => {
    const renderComponent = () =>
      mount(
        <FormattedMessage
          id="greeting"
          values={{ name: 'world' }}
          defaultMessage="Hi, {name}!"
        />,
      );
    expect(renderComponent).toThrow();
  });

  it('renders with default component', () => {
    setDefaultComponent('span');
    const wrapper = mount(
      <FormattedMessage
        id="greeting"
        values={{ name: 'world' }}
        defaultMessage="Hi, {name}!"
      />,
    );
    expect(wrapper.html()).toEqual('<span>Hello, world!</span>');
  });

  it('renders with custom component', () => {
    const Heading = ({ children }) => <h1>{children}</h1>;
    const wrapper = mount(
      <FormattedMessage
        component={Heading}
        id="greetin"
        values={{ name: 'world' }}
        defaultMessage="Hi, {name}!"
      />,
    );
    expect(wrapper.html()).toEqual('<h1>Hi, world!</h1>');
  });
});
