jest.mock('react-redux');
import React from 'react';
import { mount } from 'enzyme';
import { __setState } from 'react-redux';
import { FormattedRelative, setDefaultComponent } from '../../lib/index.es.js';

__setState({
  intl: {
    locale: 'en',
    formats: {
      relative: {
        tweet: {
          style: 'numeric',
          units: 'hour',
        },
      },
    },
  },
});

const ONE_DAY = 24 * 3600 * 1000;

describe('FormattedRelative Component', () => {
  it('throws if no default component set', () => {
    const renderComponent = () =>
      mount(<FormattedRelative value={Date.now()} />);
    expect(renderComponent).toThrow();
  });

  it('renders with default component', () => {
    setDefaultComponent('small');
    const wrapper = mount(
      <FormattedRelative value={Date.now() - ONE_DAY} format="tweet" />,
    );
    expect(wrapper.html()).toEqual('<small>24 hours ago</small>');
  });

  it('renders with custom configs', () => {
    setDefaultComponent('small');
    const wrapper = mount(
      <FormattedRelative
        value={Date.now()}
        initialNow={Date.now() - ONE_DAY}
        units="hour"
      />,
    );
    expect(wrapper.html()).toEqual('<small>in 24 hours</small>');
  });
});
