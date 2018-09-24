jest.mock('react-redux');
import React from 'react';
import { mount } from 'enzyme';
import { __setState } from 'react-redux';
import { FormattedDate, setDefaultComponent } from '../../lib/index.es.js';

__setState({
  intl: {
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
  },
});

describe('FormattedDate Component', () => {
  it('throws if no default component set', () => {
    const renderComponent = () => mount(<FormattedDate value="1990-06-24" />);
    expect(renderComponent).toThrow();
  });

  it('renders with default component', () => {
    setDefaultComponent('small');
    const wrapper = mount(<FormattedDate value="1990-06-24" format="leave" />);
    expect(wrapper.html()).toEqual('<small>06/24/1990</small>');
  });

  it('accepts empty string as undefined', () => {
    setDefaultComponent('small');
    const wrapper = mount(
      <FormattedDate value="1990-06-24" year="" month="short" day="numeric" />,
    );
    expect(wrapper.html()).toEqual('<small>Jun 24</small>');
  });
});
