import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import SingleRecipe from './SingleRecipe';
import { StackNavigator, withNavigation } from 'react-navigation';
class RecipeCard extends Component {
  constructor(props) {
    super(props)
    console.log('i am in constructor, OMG', this.props)
  }
  render() {
    const remote = 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png';
    return (
      <ImageBackground style={styles.container} source={{ uri: remote }} >
        <View style={styles.overlay}></View>
        <Text style={styles.cardText}>This is a style card!</Text>
        {/* <Button onPress={() => this.props.navigation.navigate('Landing')} title="explore"></Button> */}
        <TouchableOpacity style={styles.exploreButton} onPress={() => this.props.navigation.navigate('SingleRecipe')} ><Text style={styles.exploreText}>Explore</Text></TouchableOpacity>
        <View style={styles.recipeStats}>
          <Text style={styles.recipestatText}>Viewed: </Text>
          <Text style={styles.recipestatText}>Favorited: </Text>
        </View>
      </ImageBackground >

    )
  }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'gray',
    paddingTop: 70,
    height: height / 3,
    alignItems: 'center',
    width: width,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around'
  },
  cardText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'flex-start'
  },
  exploreButton: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    marginTop: '10%'
  },
  exploreText: {
    color: 'white',
    textAlign: 'center'
  },
  recipeStats: {
    flex: 1,
    justifyContent: 'center'
  },
  recipestatText: {
    color: 'white'
  }
})
export default withNavigation(RecipeCard)