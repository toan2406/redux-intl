import { ACTION_CHANGE_LOCALE } from './constants';

const INITIAL_STATE = {
  locale: 'en',
  messages: {},
  formats: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === ACTION_CHANGE_LOCALE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default reducer;
