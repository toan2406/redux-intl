import { ACTION_CHANGE_LOCALE } from './constants';

const changeLocaleAction = ({ locale, messages, formats }) => ({
  type: ACTION_CHANGE_LOCALE,
  payload: {
    locale,
    messages,
    formats,
  },
});

export { changeLocaleAction };
