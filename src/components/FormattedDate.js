// @flow
import React from 'react';
import flow from '../utils/flow';
import omitBy from '../utils/omitBy';
import isUndefined from '../utils/isUndefined';
import acceptEmptyString from '../utils/acceptEmptyString';
import connectAndInjectIntl from '../connectAndInjectIntl';
import { getDefaultComponent } from './componentManager';

const FormattedDate = ({
  component: Component = getDefaultComponent(),
  value,
  format,
  intl,

  localeMatcher,
  formatMatcher,
  timeZone,
  hour12,
  weekday,
  era,
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeZoneName,
}) => (
  <Component>
    {intl.formatDate(
      value,
      flow(omitBy(isUndefined), acceptEmptyString)({
        format,
        localeMatcher,
        formatMatcher,
        timeZone,
        hour12,
        weekday,
        era,
        year,
        month,
        day,
        hour,
        minute,
        second,
        timeZoneName,
      }),
    )}
  </Component>
);

export default connectAndInjectIntl(FormattedDate);
