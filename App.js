import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './client/store'
import Main from './client'

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Main />
    )
  }
}
