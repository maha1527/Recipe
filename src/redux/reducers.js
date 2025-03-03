import {
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SET_SEARCH_TERM,
    SET_FILTERS,
  } from './actions';
  
  const initialState = {
    recipes: [],
    loading: false,
    error: null,
    favorites: [],
    searchTerm: '',
    filters: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECIPES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_RECIPES_SUCCESS:
        return { ...state, loading: false, recipes: action.payload };
      case FETCH_RECIPES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_FAVORITE:
        return { ...state, favorites: [...state.favorites, action.payload] };
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((recipe) => recipe.recipe.uri !== action.payload),
        };
      case SET_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      case SET_FILTERS:
        return { ...state, filters: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;