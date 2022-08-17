import { compose } from 'recompose';

import { withRouter } from './withRouter';
import { withUI } from './withUI';

export const withProviders = compose(withRouter, withUI);
