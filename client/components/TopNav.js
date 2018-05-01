import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')
export default class TopNav extends Component {
  render() {
    const remote = 'https://st.hzcdn.com/fimgs/43119d07045c50e0_2972-w500-h400-b0-p0--.jpg'
    return (
      <ImageBackground
        style={styles.imageContainer}
        source={{ uri: remote }}
      >
        <View style={styles.overlay}>
          <Text style={styles.innerText}>
            Recipes
          </Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>Total Recipes: 900</Text>
            <Text style={styles.statsText}>Your Recipes: 15</Text>
          </View>
        </View>

      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 200,
    marginBottom: 24,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'space-around'
  },
  innerText: {
    color: 'white',
    fontSize: width * 0.1,
    textAlign: 'center',
    paddingTop: '10%',
  },
  statsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statsText: {
    color: 'white'
  }
})