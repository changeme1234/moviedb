import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import AppStack from './src/AppStack'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { isReady: false }
  }

  async componentDidMount () {
    await Font.loadAsync({
      ...Ionicons.font,
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })

    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return null
    }

    return <AppStack />
  }
}
