import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'

export default class AuthLoading extends React.Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    this.props.navigation.navigate(userToken ? 'Main' : 'Auth')
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
