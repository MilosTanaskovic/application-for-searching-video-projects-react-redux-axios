const initState = {
 popular: [],
 newProj: [],
 upcoming: []
}

const projectsReducer = (state=initState,action) => {
 switch (action.type) {
  case 'FETCH_PROJ':
   return {...state, popular: action.payload.popular}
  default:
   return {...state}
 }
}

export default projectsReducer;