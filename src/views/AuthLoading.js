import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, StatusBar, View } from 'react-native'

import { getSession } from '../storage'

export default class AuthLoading extends React.Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const sessionId = await getSession()

    this.props.navigation.navigate(sessionId ? 'Main' : 'Auth')
  };

  render () {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired,
}
