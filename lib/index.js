'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var IntlMessageFormat = _interopDefault(require('intl-messageformat'));
var IntlRelativeFormat = _interopDefault(require('intl-relativeformat'));
var memoizeIntlConstructor = _interopDefault(require('intl-format-cache'));

var castPath = function castPath(value) {
  if (Array.isArray(value)) return value;
  return value.toString().split('.');
};

var getOr = (function (defaultValue, path) {
  return function (object) {
    var keys = castPath(path);
    var length = keys.length;
    var index = 0;
    var result = object;

    while (result && index < length) {
      result = result[keys[index++]];
    }if (index === length) return result;
    return defaultValue;
  };
});

function formatMessage(config, formatters) {
  var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      messages = config.messages,
      formats = config.formats;
  var id = messageDescriptor.id,
      defaultMessage = messageDescriptor.defaultMessage;


  var message = getOr(defaultMessage, id)(messages);
  var hasValues = Object.keys(values).length;

  if (!hasValues) return message;

  var formatter = formatters.getMessageFormat(message, locale, formats);
  var formattedMessage = formatter.format(values);

  return formattedMessage;
}

var format = /*#__PURE__*/Object.freeze({
  formatMessage: formatMessage
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var withProps = (function (withPropsFn) {
  return function (Component) {
    return function (props) {
      return React.createElement(Component, _extends({}, props, withPropsFn(props)));
    };
  };
});

var intlFormatMethodNames = ['formatMessage'];

var formatters = {
  getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
  getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat)
};

var getBoundFormatFns = function getBoundFormatFns(config, state) {
  return intlFormatMethodNames.reduce(function (boundFormatFns, name) {
    boundFormatFns[name] = format[name].bind(null, config, state);
    return boundFormatFns;
  }, {});
};

var injectIntl = withProps(function (_ref) {
  var intlConfig = _ref.intl;

  var boundFormatFns = getBoundFormatFns(intlConfig, formatters);

  return {
    intl: _extends({}, intlConfig, boundFormatFns, {
      formatters: formatters
    })
  };
});

exports.injectIntl = injectIntl;
