// @flow
import type { ComponentType } from 'react';

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
  format?: string,
  now?: number | string | Date,
  style?: 'best fit' | 'numeric',
  units?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
};

export type NumberFormatOptions = {
  format?: string,
  localeMatcher?: 'best fit' | 'lookup',

  style?: 'decimal' | 'currency' | 'percent',

  currency?: string,
  currencyDisplay?: 'symbol' | 'code' | 'name',

  useGrouping?: boolean,

  minimumIntegerDigits?: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  minimumSignificantDigits?: number,
  maximumSignificantDigits?: number,
};

export type DateTimeFormatOptions = {
  format?: string,
  localeMatcher?: 'best fit' | 'lookup',
  formatMatcher?: 'basic' | 'best fit',

  timeZone?: string,
  hour12?: boolean,

  weekday?: 'narrow' | 'short' | 'long',
  era?: 'narrow' | 'short' | 'long',
  year?: 'numeric' | '2-digit',
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day?: 'numeric' | '2-digit',
  hour?: 'numeric' | '2-digit',
  minute?: 'numeric' | '2-digit',
  second?: 'numeric' | '2-digit',
  timeZoneName?: 'short' | 'long',
};

export type IntlConfig = {
  locale: string,
  messages: Object,
  formats?: {
    relative: RelativeFormatOptions,
    number: NumberFormatOptions,
    date: DateTimeFormatOptions,
    time: DateTimeFormatOptions,
  },
};

export type HOC<Base, Enhanced> = (
  ComponentType<Base>,
) => ComponentType<Enhanced>;

export type BoundFormatFunctions = {
  formatMessage: (MessageDescriptor, Object) => string,
  formatRelative: (number | string | Date, RelativeFormatOptions) => string,
  formatNumber: Function,
  formatDate: Function,
  formatTime: Function,
};

export type IntlObject = IntlConfig &
  BoundFormatFunctions & { formatters: Formatters };
