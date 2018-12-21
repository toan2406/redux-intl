import invariant from 'invariant';
import { createFormatters } from '../injectIntl';

let unsubscribe = () => {};
let intlObject = null;

const getFormatter = formatterName => (...params) => {
  invariant(intlObject, '[Redux Intl] Intl helper is not configurated');
  return intlObject[formatterName](...params);
};

const Intl = {
  setStore: store => {
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
  formatDate: getFormatter('formatDate'),
  formatNumber: getFormatter('formatNumber'),
  formatRelative: getFormatter('formatRelative'),
};

export default Intl;
