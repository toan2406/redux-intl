import React from 'react';
import { mount } from 'enzyme';
import { injectIntl } from '../lib/index.es.js';

describe('injectIntl HOC', () => {
  it('injects intl into component', () => {
    const Component = jest.fn(() => null);
    const EnhancedComponent = injectIntl(Component);
    mount(<EnhancedComponent />);
    expect(Component.mock.calls[0][0]).toHaveProperty('intl');
  });
});
