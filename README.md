# Redux-Intl
Provide Redux components to integrate i18n to your app ⚛️ 🌏. This library is inspired from [react-intl](https://github.com/yahoo/react-intl)

### Why another intl library?
Althought **react-intl** works well and stable, it has some known issues when integrate with Redux. This library provides only Redux components (HOC, reducer, action creator), so it will work for both Web and React Native platforms.

The APIs injected by **redux-intl** will mostly be the same as **react-intl**'s. You can check the this [documentation](https://github.com/yahoo/react-intl/wiki/API)

**NOTE:** This library forces importing locale data beside `en` to reduce bundle size. Check the example below for more info
