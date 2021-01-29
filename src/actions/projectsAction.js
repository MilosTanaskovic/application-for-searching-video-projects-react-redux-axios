import axios from 'axios';
import { popularProjectURL } from '../Api/Api';

// Action Creator
export const loadProjects = () => async (dispatch) => {
 //FETCH AXIOS
 const pupularData = await axios.get(popularProjectURL());
 dispatch({
  type: "FETCH_PROJ",
  payload: {
   popular: pupularData.data.results,
  }
 })
}