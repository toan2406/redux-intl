jest.mock('react-redux');
import React from 'react';
import { mount } from 'enzyme';
import { __setState } from 'react-redux';
import { FormattedNumber, setDefaultComponent } from '../../lib/index.es.js';

__setState({
  intl: {
    locale: 'en',
    formats: {
      number: {
        coverage: {
          style: 'percent',
        },
      },
    },
  },
});

describe('FormattedNumber Component', () => {
  it('throws if no default component set', () => {
    const renderComponent = () => mount(<FormattedNumber value={5000} />);
    expect(renderComponent).toThrow();
  });

  it('renders with default component', () => {
    setDefaultComponent('small');
    const wrapper = mount(<FormattedNumber value={0.99} format="coverage" />);
    expect(wrapper.html()).toEqual('<small>99%</small>');
  });

  it('renders with custom configs', () => {
    setDefaultComponent('small');
    const wrapper = mount(
      <FormattedNumber
        value={1000}
        style="currency"
        currency="USD"
        currencyDisplay="symbol"
      />,
    );
    expect(wrapper.html()).toEqual('<small>$1,000.00</small>');
  });
});
