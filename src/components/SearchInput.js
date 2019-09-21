import React from 'react'
import PropTypes from 'proptypes'
import { TextInput } from 'react-native'
import { Icon, View } from 'native-base'

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
}

export default function SearchInput ({ style, onChangeText, value, placeholder }) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
        <Icon
          name='ios-search'
          style={{ color: 'gray', fontSize: 20 }}
          onPress={this.onToggleSecure}
        />
      </View>
    </View>
  )
}

SearchInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
}
