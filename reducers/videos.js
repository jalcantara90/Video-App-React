const videos = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_LIST' : {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'SET_SUGGESTION_LIST' : {
      return {
        ...state,
        ...action.payload
      }
    }
    default : 
      return state
  }
}

export default videos;