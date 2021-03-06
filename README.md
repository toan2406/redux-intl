# Redux-Intl
![node](https://img.shields.io/badge/node-8.11.3-green.svg?style=flat)
![npm](https://img.shields.io/badge/npm-5.6.0-red.svg?style=flat)
![react](https://img.shields.io/badge/react-free-00dcff.svg?style=flat)

Provide Redux components to integrate i18n to your app. This library is heavily inspired from [React Intl](https://github.com/yahoo/react-intl)

### Why another intl library?

Althought React Intl works well and stable, it has [issue][Issue] when using with Redux. This library provides only Redux components (HOC, reducer, action creator) so it is applicable for both Web and React Native platforms.

Beside that, it also has some enhancements:
* Support nested in dictionary file
* Force importing locale data to reduce bundle size, since React Native uses Metro bundler (more info [here](https://github.com/yahoo/intl-messageformat/blob/master/index.js))

V2 is here
----------

Redux Intl now comes with helpers which just return formatted value directly, hence it will lose ability of auto re-render message when switching locale, but gain ease of use and testing.

```js
import { Intl } from 'redux-intl';

Intl.setStore(store); // pass in the redux store

Intl.formatMessage({ id: 'greeting' }, { name: 'world' }); // return string "Hello, world!"
```

The shape of intl config, or signature of all format functions are still the same as v1.

Documentation
-------------

The API layer that Redux Intl provides is mostly be the same as React Intl's. You can check the its [documentation](https://github.com/yahoo/react-intl/wiki/API)

Example
-------

```js
import {
  connectAndInjectIntl,
  intlReducer,
  changeLocaleAction,
  addLocaleData
} from 'redux-intl';
import vi from 'redux-intl/locale-data/vi';

addLocaleData(vi);

const viConfig = {
  locale: 'vi',
  messages: {
    greeting: 'Xin chao, {name}!'
  },
  formats: {
    number: {
      style: 'currency',
      currency: 'VND',
      currencyDisplay: 'symbol',
    }
  }
};

store.dispatch(changeLocaleAction(viConfig));

const Greeting = ({ intl }) =>
  <Text>{intl.formatMessage({ id: 'greeting' }, { name: 'the gioi' })}</Text>;

const EnhancedGreeting = connectAndInjectIntl(Greeting);
```

React Intl issue with Redux
---------------------------

`IntlProvider` uses its own context to pass down the `intl` object to the whole app. This causes the issue of Redux connected components won't be updated if locale changes. There are 2 tricks to bypass this problem, by forcing updating component:
* Explicitly map state `intl` to props in `connect`
* Use React Intl's `injectIntl` HOC to wrap above `connect`

[Issue]: https://github.com/Thinkei/eh-redux-intl#react-intl-issue-with-redux
