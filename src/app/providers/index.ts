import R from 'ramda';
import { withGlobalStyles } from './withGlobalStyles';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = R.compose(withTheme, withGlobalStyles, withRouter);
