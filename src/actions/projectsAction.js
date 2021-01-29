import axios from 'axios';
import { popularProjectsURL, upcomingProjectsURL ,newProjectsURL} from '../Api/Api';

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
 })
}