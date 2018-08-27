import React from 'react';
import 'intl-messageformat';

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

export { injectIntl };
