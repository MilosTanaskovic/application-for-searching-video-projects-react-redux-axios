const initState = {
 popular: [],
 newProj: [],
 upcoming: [],
 searched: [],
}

const projectsReducer = (state=initState,action) => {
 switch (action.type) {
  case 'FETCH_PROJ':
   return {...state, 
    popular: action.payload.popular,
    upcoming: action.payload.upcoming,
    newProj: action.payload.newProj,
  };
  case 'FETCH_SEARCHED':
    return { ...state,
      searched: action.payload.searched,
    };
  case 'CLEAR_SEARCHED':
    return { ...state,
      searched: [],
    }
  default:
   return {...state}
 }
}

export default projectsReducer;