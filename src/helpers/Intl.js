import invariant from 'invariant';
import { createFormatters } from '../injectIntl';

let intlObject = null;

const getFormatter = formatterName => (...params) => {
  invariant(intlObject, '[Redux Intl] Intl helper is not configurated');
  return intlObject[formatterName](...params);
};

const Intl = {
  setStore: store => {
    invariant(!intlObject, '[Redux-Intl] Intl helper is already configurated');

    intlObject = createFormatters(store.getState().intl);
    let currentLocale = intlObject.locale;

    store.subscribe(() => {
      const previousLocale = currentLocale;
      const currentState = store.getState();
      currentLocale = currentState.intl.locale;

      if (previousLocale !== currentLocale) {
        intlObject = createFormatters(currentState.intl);
      }
    });
  },
  formatMessage: getFormatter('formatMessage'),
  formatDate: getFormatter('formatDate'),
  formatNumber: getFormatter('formatNumber'),
  formatRelative: getFormatter('formatRelative'),
};

export default Intl;
