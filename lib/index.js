'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
require('intl-messageformat');

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

var injectIntl = withProps(function () {
  return {
    intl: {
      formatMessage: ''
    }
  };
});

exports.injectIntl = injectIntl;
