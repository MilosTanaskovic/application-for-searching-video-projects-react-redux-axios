import { combineReducers } from "redux";
import projectsReducer from './projetsReducer';

const rootReducer = combineReducers({
 projects: projectsReducer,

});
export default rootReducer;