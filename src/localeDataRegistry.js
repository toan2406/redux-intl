import IntlMessageFormat from 'intl-messageformat/src/main';
import IntlRelativeFormat from 'intl-relativeformat/src/main';

export function addLocaleData(data) {
  const locales = Array.isArray(data) ? data : [data];
  locales.forEach(localeData => {
    if (localeData.locale) {
      IntlMessageFormat.__addLocaleData(localeData);
      IntlRelativeFormat.__addLocaleData(localeData);
    }
  });
}
