import React from 'react'
import PropTypes from 'proptypes'
import { Container, View } from 'native-base'

import LoginForm from '../components/LoginForm'

export default function Login ({ navigation }) {
  const onLogin = () => {
    navigation.navigate('Main')
  }

  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginForm onLogin={onLogin} />
      </View>
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}
