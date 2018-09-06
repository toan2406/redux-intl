// @flow
import React from 'react';
import omitBy from '../utils/omitBy';
import isUndefined from '../utils/isUndefined';
import connectAndInjectIntl from '../connectAndInjectIntl';
import { getDefaultComponent } from './componentManager';

const FormattedRelative = ({
  component: Component = getDefaultComponent(),
  value,
  initialNow,
  format,
  style,
  units,
  intl,
}) => (
  <Component>
    {intl.formatRelative(
      value,
      omitBy(isUndefined)({ now: initialNow, format, style, units }),
    )}
  </Component>
);

export default connectAndInjectIntl(FormattedRelative);
