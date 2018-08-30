import invariant from 'invariant';
import flow from './utils/flow';
import path from './utils/path';
import getOr from './utils/getOr';
import defaultTo from './utils/defaultTo';

export function formatMessage(
  config,
  formatters,
  messageDescriptor = {},
  values = {},
) {
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

export function formatRelative(config, formatters, value, options = {}) {
  const { locale, formats } = config;

  const date = new Date(value);
  const formatter = formatters.getRelativeFormat(locale);
  const formattedRelative = formatter.format(date);

  return formattedRelative;
}
