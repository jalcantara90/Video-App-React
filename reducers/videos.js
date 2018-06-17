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
    case 'SET_SELECTED_MOVIE' : {
      return {
        ...state,
        selectedMovie: action.payload.movie
      }
    }
    default : 
      return state
  }
}

export default videos;