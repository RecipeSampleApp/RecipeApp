import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import RecipeCard from './recipeCard';
import TopNav from './TopNav';
import { StackNavigator } from 'react-navigation';
export default class Landing extends Component {
  constructor(props) {
    super(props)
    console.log(this.props, 'landing props')
    this.state = {}
  }
  render() {
    console.log('props', this.props)
    return (
      <View>
        <View style={styles.container}>
          <TopNav />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </View>

        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
})
