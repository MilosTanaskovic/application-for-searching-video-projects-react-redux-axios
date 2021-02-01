const initState = {
 project: { 
   platforms: []
 },
 screen: {
   results: []
 },
 isLoading: true,
}

const detailReducer = (state=initState, action) => {
 switch (action.type) {
  case "GET_DETAIL":
   return {
    ...state,
    project: action.payload.project,
    screen: action.payload.screen,
    isLoading: false,
   }
  case "LOADING_DETAIL":
    return{
      ...state,
      isLoading: true,
    }
  default:
   return {...state}
 }
}

export default detailReducer