const initState = {
 popular: [],
 newProj: [],
 upcoming: []
}

const projectsReducer = (state=initState,action) => {
 switch (action.type) {
  case 'FETCH_PROJ':
   return {...state}
  default:
   return {...state}
 }
}
export default projectsReducer;