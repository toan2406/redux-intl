export { default as injectIntl, createFormatters } from './injectIntl';
export { default as connectAndInjectIntl } from './connectAndInjectIntl';
export { default as intlReducer } from './intlReducer';
export { changeLocaleAction } from './intlActions';
export { addLocaleData } from './localeDataRegistry';

export {
  setDefaultComponent,
  getDefaultComponent,
} from './components/componentManager';
export { default as FormattedMessage } from './components/FormattedMessage';
export { default as FormattedRelative } from './components/FormattedRelative';
export { default as FormattedNumber } from './components/FormattedNumber';
export { default as FormattedDate } from './components/FormattedDate';

export type {
  IntlConfig,
  IntlObject,
  DateTimeFormatOptions,
  NumberFormatOptions,
  RelativeFormatOptions,
  MessageDescriptor,
  Formatters,
} from './types';
