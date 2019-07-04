// @flow
import invariant from 'invariant';
import IntlMessageFormat from 'intl-messageformat/src/main';
import IntlRelativeFormat from 'intl-relativeformat/src/main';
import memoizeIntlConstructor from 'intl-format-cache';
import * as format from './format';
import withProps from './utils/withProps';
import type {
  IntlConfig,
  IntlObject,
  Formatters,
  BoundFormatFunctions,
} from './types';

const formatters = {
  getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
  getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
  getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
  getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
};

const getBoundFormatFns: (IntlConfig, Formatters) => BoundFormatFunctions = (
  config,
  state,
) => ({
  formatMessage: format.formatMessage.bind(null, config, state),
  formatRelative: format.formatRelative.bind(null, config, state),
  formatNumber: format.formatNumber.bind(null, config, state),
  formatDate: format.formatDate.bind(null, config, state),
  formatTime: format.formatTime.bind(null, config, state),
  formatHTMLMessage: format.formatHTMLMessage.bind(null, config, state),
});

const createFormatters: IntlConfig => IntlObject = intlConfig => {
  const boundFormatFns = getBoundFormatFns(intlConfig, formatters);

  return {
    ...intlConfig,
    ...boundFormatFns,
    formatters,
  };
};

const injectIntl = withProps(({ intl: intlConfig }) => {
  invariant(
    intlConfig,
    '[Redux Intl] Prop `intl` must be passed in. Consider using `connectAndInjectIntl` instead',
  );

  return {
    intl: createFormatters(intlConfig),
  };
});

export { createFormatters };
export default injectIntl;
