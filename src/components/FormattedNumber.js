// @flow
import React from 'react';
import omitBy from '../utils/omitBy';
import isUndefined from '../utils/isUndefined';
import connectAndInjectIntl from '../connectAndInjectIntl';
import { getDefaultComponent } from './componentManager';

const FormattedNumber = ({
  component: Component = getDefaultComponent(),
  value,
  format,
  intl,

  localeMatcher,
  style,
  currency,
  currencyDisplay,
  useGrouping,
  minimumIntegerDigits,
  minimumFractionDigits,
  maximumFractionDigits,
  minimumSignificantDigits,
  maximumSignificantDigits,
}) => (
  <Component>
    {intl.formatNumber(
      value,
      omitBy(isUndefined)({
        format,
        localeMatcher,
        style,
        currency,
        currencyDisplay,
        useGrouping,
        minimumIntegerDigits,
        minimumFractionDigits,
        maximumFractionDigits,
        minimumSignificantDigits,
        maximumSignificantDigits,
      }),
    )}
  </Component>
);

export default connectAndInjectIntl(FormattedNumber);
