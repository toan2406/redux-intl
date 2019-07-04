// @flow
import invariant from 'invariant';
import { createFormatters } from '../injectIntl';
import type { IntlObject } from '../types';

let unsubscribe = () => {};
let intlObject: IntlObject | null = null;

const getFormatter = formatterName => (...params: any[]) => {
  invariant(intlObject, '[Redux Intl] Intl helper is not configurated');
  return intlObject[formatterName](...params);
};

const Intl = {
  setStore: (store: Object) => {
    intlObject = createFormatters(store.getState().intl);
    let currentLocale = intlObject.locale;

    unsubscribe();
    unsubscribe = store.subscribe(() => {
      const previousLocale = currentLocale;
      const currentState = store.getState();
      currentLocale = currentState.intl.locale;

      if (previousLocale !== currentLocale) {
        intlObject = createFormatters(currentState.intl);
      }
    });
  },
  formatMessage: getFormatter('formatMessage'),
  formatNumber: getFormatter('formatNumber'),
  formatRelative: getFormatter('formatRelative'),
  formatDate: getFormatter('formatDate'),
  formatTime: getFormatter('formatTime'),
  formatHTMLMessage: getFormatter('formatHTMLMessage'),
};

export default Intl;
