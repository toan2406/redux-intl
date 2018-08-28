import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';
import memoizeIntlConstructor from 'intl-format-cache';
import * as format from './format';
import withProps from './utils/withProps';

const intlFormatMethodNames = ['formatMessage'];

const formatters = {
  getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
  getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
};

const getBoundFormatFns = (config, state) =>
  intlFormatMethodNames.reduce((boundFormatFns, name) => {
    boundFormatFns[name] = format[name].bind(null, config, state);
    return boundFormatFns;
  }, {});

export default withProps(({ intl: intlConfig }) => {
  const boundFormatFns = getBoundFormatFns(intlConfig, formatters);

  return {
    intl: {
      ...intlConfig,
      ...boundFormatFns,
      formatters,
    },
  };
});
