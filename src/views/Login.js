import React from 'react'
import PropTypes from 'proptypes'
import { Container, Content } from 'native-base'

import LoginForm from '../components/LoginForm'

export default function Login ({ navigation }) {
  const onLogin = () => {
    navigation.navigate('Main')
  }

  return (
    <Container>
      <Content>
        <LoginForm onLogin={onLogin} />
      </Content>
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}
