import React from 'react'
import PropTypes from 'proptypes'
import { View } from 'react-native'
import { Button, Header, Text, Container } from 'native-base'

import { removeSession } from '../storage'

export default function Settings ({ navigation }) {
  const logout = () => {
    removeSession()
    navigation.navigate('Auth')
  }

  return (
    <Container>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Profile Screen</Text>
        <Button onPress={() => logout()}><Text>Logout</Text></Button>
      </View>
    </Container>

  )
}

Settings.propTypes = {
  navigation: PropTypes.object,
}
