// @flow
export type Formatters = {
  getDateTimeFormat: Function,
  getNumberFormat: Function,
  getMessageFormat: Function,
  getRelativeFormat: Function,
};

export type MessageDescriptor = {
  id?: string,
  defaultMessage?: string,
};

export type RelativeFormatOptions = {
  now?: number | string | Date,
  style?: 'best fit' | 'numeric',
  units?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
};

export type IntlConfig = {
  locale: string,
  messages: Object,
  formats?: {
    relative: RelativeFormatOptions,
  },
};
