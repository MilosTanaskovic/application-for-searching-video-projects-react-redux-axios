import axios from 'axios';
import { projDetailsURL, screenShotURL } from "../Api/Api";

// Action Creator
export const loadDetail = (id) => async (dispatch) => {
 //FETCH AXIOS
 const detailData = await axios.get(projDetailsURL(id));
 const screenData = await axios.get(screenShotURL(id));

 dispatch({
  type: "GET_DETAIL",
  payload: {
   project: detailData.data,
   screen: screenData.data,
  }
 })
} 