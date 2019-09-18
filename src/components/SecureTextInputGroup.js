import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import { Icon, View, Text } from 'native-base'

const styles = {
  container: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { flex: 1, marginRight: 12, fontSize: 16 },
  label: { color: 'gray' },
}

export default class SecureTextInputGroup extends Component {
  constructor (props) {
    super(props)
    this.state = { isSecure: true }
  }

  onToggleSecure = () => {
    this.setState({ isSecure: !this.state.isSecure })
  }

  render () {
    const { isSecure } = this.state
    const { label, style, onChangeText, value } = this.props
    const eyeIcon = isSecure ? 'eye' : 'eye-off'

    return (
      <View style={style}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.text}
            secureTextEntry={isSecure}
            onChangeText={onChangeText}
            value={value}
          />
          <Icon
            name={eyeIcon}
            style={{ color: 'gray', fontSize: 20 }}
            onPress={this.onToggleSecure}
          />
        </View>
      </View>
    )
  }
}

SecureTextInputGroup.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
}
