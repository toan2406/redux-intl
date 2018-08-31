# Redux-Intl
Provide Redux components to integrate i18n to your app. This library is heavily inspired from [React Intl](https://github.com/yahoo/react-intl)

### Why another intl library?
Althought React Intl works well and stable, it has [issue][Issue] when using with Redux. This library provides only Redux components (HOC, reducer, action creator) so it is applicable for both Web and React Native platforms.

Beside that, it also has some enhancements:
* Support nested in dictionary file
* Force importing locale data to reduce bundle size, since React Native uses Metro bundler (more info [here](https://github.com/yahoo/intl-messageformat/blob/master/index.js))

### Documentation
The API layer that Redux Intl provides is mostly be the same as React Intl's. You can check the its [documentation](https://github.com/yahoo/react-intl/wiki/API)

### Example

```js
import { injectIntl } from 'redux-intl';

const enhance = compose(
  connectToRedux,
  injectIntl
);

const Greeting = ({ intl }) => <h1>{intl.formatMessage({ id: 'greeting' }, { name: 'world' })}</h1>;

const EnhancedGreeting = enhance(Greeting);
```

React Intl issue with Redux
---------------------------
`IntlProvider` uses its own context to pass down the `intl` object to the whole app. This causes the issue of Redux connected components won't be updated if locale changes. There are 2 tricks to bypass this problem, by force updating component:
* Explicitly map state `intl` to props in `connect`
* Use React Intl's `injectIntl` HOC to wrap above `connect`

[Issue]: https://github.com/Thinkei/eh-redux-intl#react-intl-issue-with-redux
