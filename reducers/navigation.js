import AppNavigator from '../src/app-navigator';

import { createNavigationReducer } from 'react-navigation-redux-helpers';

const navigationReducer = createNavigationReducer(AppNavigator);
export default navigationReducer;