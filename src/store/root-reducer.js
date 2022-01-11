import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import notificationReducer from './siteCoordinator/siteCoordinator.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  siteCoordinator: siteCoordinatorReducer,
  notification: notificationReducer
});
export default rootReducer;
