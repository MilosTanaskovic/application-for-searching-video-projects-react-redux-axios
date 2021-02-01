import { combineReducers } from "redux";
import projectsReducer from './projetsReducer';
import detailReducer from './detailReducer.js';

const rootReducer = combineReducers({
 projects: projectsReducer,
 detail: detailReducer,
 
});
export default rootReducer;