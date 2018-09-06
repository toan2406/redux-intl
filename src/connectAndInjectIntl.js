// @flow
import { connect } from 'react-redux';
import injectIntl from './injectIntl';
import flow from './utils/flow';
import type { HOC, IntlObject } from './types';

type BaseComponent = {
  intl: IntlObject,
} & Object;

const connectAndInjectIntl: HOC<BaseComponent, *> = flow(
  injectIntl,
  connect(state => ({ intl: state.intl })),
);

export default connectAndInjectIntl;
