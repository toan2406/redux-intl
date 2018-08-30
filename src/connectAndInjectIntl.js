import { connect } from 'react-redux';
import injectIntl from './injectIntl';
import flow from './utils/flow';

export default flow(injectIntl, connect(state => ({ intl: state.intl })));
