// @flow
import invariant from 'invariant';
import flow from './utils/flow';
import path from './utils/path';
import getOr from './utils/getOr';
import defaultTo from './utils/defaultTo';
import type {
  IntlConfig,
  Formatters,
  MessageDescriptor,
  RelativeFormatOptions,
  NumberFormatOptions,
} from './types';

export function formatMessage(
  config: IntlConfig,
  formatters: Formatters,
  messageDescriptor: MessageDescriptor = {},
  values: Object = {},
): string {
  const { locale, messages, formats } = config;
  const { id, defaultMessage } = messageDescriptor;

  invariant(id, '[Redux Intl] An `id` must be provided to format a message.');

  const message = flow(path(id), defaultTo(defaultMessage), defaultTo(id))(
    messages,
  );
  const hasValues = Object.keys(values).length;

  if (!hasValues) return message;

  const formatter = formatters.getMessageFormat(message, locale, formats);
  const formattedMessage = formatter.format(values);

  return formattedMessage;
}

export function formatRelative(
  config: IntlConfig,
  formatters: Formatters,
  value: number | string | Date,
  options: RelativeFormatOptions = {},
): string {
  const { locale, formats } = config;
  const { now, ...userOptions } = options;

  const dateObject = createDate(value);
  const nowObject = flow(defaultTo(Date.now()), createDate)(now);
  const defaultOptions = getOr({}, 'relative')(formats);

  const formatter = formatters.getRelativeFormat(locale, {
    ...defaultOptions,
    ...userOptions,
  });
  const formattedRelative = formatter.format(dateObject, {
    now: isFinite(nowObject) ? nowObject : Date.now(),
  });

  return formattedRelative;
}

export function formatNumber(
  config: IntlConfig,
  formatters: Formatters,
  value: number,
  options: NumberFormatOptions = {},
): string {
  const { locale, formats } = config;
  const defaultOptions = getOr({}, 'number')(formats);
  const formatter = formatters.getNumberFormat(locale, {
    ...defaultOptions,
    ...options,
  });
  const formattedNumber = formatter.format(value);

  return String(formattedNumber);
}

const createDate = value => new Date(value);