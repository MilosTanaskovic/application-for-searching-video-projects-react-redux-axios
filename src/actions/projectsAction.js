import axios from 'axios';
import { popularProjectsURL, upcomingProjectsURL ,newProjectsURL, searchGameURL } from '../Api/Api';

// Action Creator
export const loadProjects = () => async (dispatch) => {
 //FETCH AXIOS
 const pupularData = await axios.get(popularProjectsURL());
 const upcomingData = await axios.get(upcomingProjectsURL());
 const newData = await axios.get(newProjectsURL());
 dispatch({
  type: "FETCH_PROJ",
  payload: {
   popular: pupularData.data.results,
   upcoming: upcomingData.data.results,
   newProj: newData.data.results,
  }
 });
};
// Search
export const fetchSearch = (proj_name) => async (dispatch) => {
 //FETCH AXIOS
 const searchGames = await axios.get(searchGameURL(proj_name));

 dispatch({
  type: "FETCH_SEARCHED",
  payload: {
   searched: searchGames.data.results,
  }
 });
};