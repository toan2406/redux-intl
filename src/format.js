import getOr from './utils/getOr';

export function formatMessage(
  config,
  formatters,
  messageDescriptor = {},
  values = {},
) {
  const { locale, messages, formats } = config;
  const { id, defaultMessage } = messageDescriptor;

  const message = getOr(defaultMessage, id)(messages);
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
