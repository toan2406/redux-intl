import React from 'react';
import { mount } from 'enzyme';
import { injectIntl, addLocaleData } from '../../lib/index.es.js';
import vi from '../../locale-data/vi';

const intlConfig = {
  locale: 'en',
  messages: {
    greeting: 'Hello {name}!',
    dashboard: {
      heropay: {
        current_balance: 'Your balance is {amount, number, USD}',
      },
      policy: {
        policy_count: `You have {count, plural, 
          =0 {no policies} 
          =1 {one policy} 
          other {# policies}} to acknowledge`,
      },
      anniversary_ordinal:
        '{number, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} Anniversary',
    },
    settings: {
      logout: 'Logout',
      tac: 'Terms and Conditions',
    },
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

describe('format message', () => {
  it('throws if id is missing', () => {
    const Component = ({ intl }) => <span>{intl.formatMessage()}</span>;
    const EnhancedComponent = injectIntl(Component);
    const renderComponent = () =>
      mount(<EnhancedComponent intl={intlConfig} />);
    expect(renderComponent).toThrow();
  });

  it('formats message properly', () => {
    const Component = ({ intl }) => (
      <span>{intl.formatMessage({ id: 'greeting' }, { name: 'world' })}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hello world!');
  });

  it('fallbacks to default message', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatMessage(
          { id: 'hi', defaultMessage: 'Hi {name}!' },
          { name: 'Toan' },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Hi Toan!');
  });

  it('fallbacks to message id', () => {
    const Component = ({ intl }) => (
      <span>{intl.formatMessage({ id: 'hi' }, { name: 'Toan' })}</span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('hi');
  });

  it('supports user defined formats', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatMessage(
          { id: 'dashboard.heropay.current_balance' },
          { amount: 100 },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('Your balance is $100.00');
  });

  it('supports plural', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatMessage(
          { id: 'dashboard.policy.policy_count' },
          { count: 1 },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('You have one policy to acknowledge');
  });

  it('supports ordinal', () => {
    const Component = ({ intl }) => (
      <span>
        {intl.formatMessage(
          { id: 'dashboard.anniversary_ordinal' },
          { number: 31 },
        )}
      </span>
    );
    const EnhancedComponent = injectIntl(Component);
    const wrapper = mount(<EnhancedComponent intl={intlConfig} />);
    expect(wrapper.text()).toEqual('31st Anniversary');
  });
});
