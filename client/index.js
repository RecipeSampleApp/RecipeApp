import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/Landing';
import SingleRecipe from './components/SingleRecipe'
import recipeCard from './components/recipeCard'
import { StackNavigator } from 'react-navigation';
const Main = () => (
  <Provider store={store}>
    <StackNav />
  </Provider>
)
export default Main;

const StackNav = StackNavigator({
  Landing: {
    screen: Landing
  },
  SingleRecipe: {
    screen: SingleRecipe
  },
  recipeCard: {
    screen: recipeCard
  }
},
  {
    initialRouteName: 'Landing'
  });
