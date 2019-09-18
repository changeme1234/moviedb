import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import { Text, View } from 'native-base'

const styles = {
  container: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    shadowOffset: { height: 1, width: 1 },
  },
  label: { color: 'gray' },
  text: { fontSize: 16 },
}

export default function InputGroup ({
  label,
  style,
  onChangeText,
  value,
  placeholder,
  keyboardType,
}) {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container} >
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  )
}

InputGroup.propTypes = {
  keyboardType: PropTypes.string,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
}
