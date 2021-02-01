const initState = {
 project: {},
 screen: {},
}

const detailReducer = (state=initState, action) => {
 switch (action.type) {
  case "GET_DETAIL":
   return {
    ...state,
    project: action.payload.project,
    screen: action.payload.screen,
   }
  default:
   return {...state}
 }
}

export default detailReducer