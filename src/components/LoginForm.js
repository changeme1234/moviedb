import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { Button, Text, View } from 'native-base'

import InputGroup from './InputGroup'
import SecureTextInputGroup from './SecureTextInputGroup'
import MovieDB from '../controllers/MovieDb'
import { saveSession } from '../storage'

const styles = {
  button: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    borderRadius: 5,
    marginTop: 40,
    backgroundColor: '#55A451',
  },
}
export default class LoginForm extends Component {
  state = {
    values: { username: '', password: '' },
  }

  onSubmit = async () => {
    const { values } = this.state

    try {
      const sessionId = await MovieDB.login(values.username, values.password)

      await saveSession(sessionId)

      this.props.onLogin()
    } catch (err) {
      // temporary error handler
      alert(err)
    }
  }

  setFieldValue = (field, value) => {
    this.setState({
      values: { ...this.state.values, [field]: value },
      errors: {
        ...this.state.errors,
        [field]: value,
      },
    })
  }

  render () {
    const { values } = this.state

    return (
      <View>
        <InputGroup
          label='Username'
          onChangeText={value => this.setFieldValue('username', value)}
          value={values.username}
        />
        <SecureTextInputGroup
          label='Password'
          onChangeText={value => this.setFieldValue('password', value)}
          value={values.password}
        />
        <Button style={styles.button} onPress={this.onSubmit}>
          <Text >Login</Text>
        </Button>
      </View>

    )
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
}
