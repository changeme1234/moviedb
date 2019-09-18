import React from 'react'
import PropTypes from 'proptypes'
import { View } from 'react-native'
import { Button, Text } from 'native-base'

import { removeSession } from '../storage'

export default function Settings ({ navigation }) {
  const logout = () => {
    removeSession()
    navigation.navigate('Auth')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => logout()}><Text>Logout</Text></Button>
    </View>
  )
}

Settings.propTypes = {
  navigation: PropTypes.navigation,
}
