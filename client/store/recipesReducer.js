import axios from 'axios';
import thunks from 'redux-thunk';

//Initial Recipe State
const initialRecipeState = {};

//Action Types
const GET_RECIPES = 'GET_RECIPES';
const REMOVE_RECIPE = 'REMOVE_RECIPE';
const ADD_RECIPE = 'ADD_RECIPE';
const EDIT_RECIPE = 'EDIT_RECIPE';

//Action Creators
let getRecipes = recipes => ({ type: GET_RECIPES, recipes }),
  removeRecipe = recipeId => ({ type: REMOVE_RECIPE, recipeId }),
  addRecipe = recipe => ({ type: ADD_RECIPE, recipe }),
  editRecipe = recipe => ({ type: EDIT_RECIPE, recipe });

//Thunk Creators
export const fetchRecipes = () => async (dispatch) => {

}
export const deleteRecipe = () => async (dispatch) => {

}
export const addRecipeThunk = () => async (dispatch) => {

}
export const editRecipeThunk = () => async (dispatch) => {

}
//Recipes Reducer
export const recipesReducer = (state = initialRecipeState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes
    case REMOVE_RECIPE:
      return 'done'
    case ADD_RECIPE:
      return { ...initialRecipeState, ...action.recipe }
    default:
      return initialRecipeState
  }
}
