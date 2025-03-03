export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FILTERS = 'SET_FILTERS';

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipesFailure = (error) => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});

export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});