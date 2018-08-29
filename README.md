# Redux-Intl
Provide Redux components to integrate i18n to your app. This library is inspired from [react-intl](https://github.com/yahoo/react-intl)

### Why another intl library?
Althought **react-intl** works well and stable, it has [issue][Issue] when integrate with Redux. This library provides only Redux components (HOC, reducer, action creator), so it will work for both Web and React Native platforms.

The APIs injected by **redux-intl** will mostly be the same as **react-intl**'s. You can check the this [documentation](https://github.com/yahoo/react-intl/wiki/API)

**NOTE:** This library forces importing locale data beside `en` to reduce bundle size. Check the example below for more info

```js
import { injectIntl } from 'redux-intl';

const enhance = compose(
  connectToRedux,
  injectIntl
);

const Greeting = ({ intl }) => <h1>{intl.formatMessage({ id: 'greeting' }, { name: 'world' })}</h1>;

const EnhancedGreeting = enhance(Greeting);
```

react-intl issue with Redux
---------------------------
`IntlProvider` uses its own context to pass down the intl object to the whole app. This causes the issue of Redux connected components won't be updated if locale changes. There are 2 tricks to bypass this problem, by force updating the connected components:
* Explicitly map state `intl` to props
* Use `injectIntl` HOC to wrap above `connect`

[Issue]: https://github.com/Thinkei/eh-redux-intl#react-intl-issue-with-redux
