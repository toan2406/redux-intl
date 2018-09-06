// @flow
import React from 'react';
import connectAndInjectIntl from '../connectAndInjectIntl';
import { getDefaultComponent } from './componentManager';

const FormattedMessage = ({
  component: Component = getDefaultComponent(),
  id,
  description,
  defaultMessage,
  values,
  intl,
}) => (
  <Component>
    {intl.formatMessage({ id, description, defaultMessage }, values)}
  </Component>
);

export default connectAndInjectIntl(FormattedMessage);
