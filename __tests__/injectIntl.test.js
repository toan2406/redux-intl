import React from 'react';
import { mount } from 'enzyme';
import { injectIntl, addLocaleData } from '../lib/index.es.js';
import vi from '../locale-data/vi';

describe('injectIntl HOC', () => {
  it('injects intl into component', () => {
    const Component = jest.fn(() => null);
    const EnhancedComponent = injectIntl(Component);
    mount(<EnhancedComponent />);
    expect(Component.mock.calls[0][0]).toHaveProperty('intl');
  });

  it('formats message properly', () => {
    const intlConfig = {
      locale: 'en',
      messages: {
        greeting: 'Hello {name}!',
      },
    };
    const Component = ({ intl }) => (
      <span>{intl.formatMessage({ id: 'greeting' }, { name: 'world' })}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hello world!');
  });

  it('supports user defined formats', () => {
    const intlConfig = {
      locale: 'en',
      messages: {
        price_tag: 'The price is: {price, number, USD}',
      },
      formats: {
        number: {
          USD: {
            style: 'currency',
            currency: 'USD',
          },
        },
      },
    };
    const Component = ({ intl }) => (
      <span>{intl.formatMessage({ id: 'price_tag' }, { price: 100 })}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('The price is: $100.00');
  });

  it('fallbacks to default message', () => {
    const intlConfig = {
      locale: 'en',
    };
    const Component = ({ intl }) => (
      <span>
        {intl.formatMessage(
          { id: 'greeting', defaultMessage: 'Hi {name}!' },
          { name: 'Toan' },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hi Toan!');
  });

  it('formats relative date properly', () => {
    addLocaleData(vi);
    const intlConfig = {
      locale: 'vi',
    };
    const Component = ({ intl }) => (
      <span>{intl.formatRelative(Date.now() - 3000)}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('3 giây trước');
  });
});
