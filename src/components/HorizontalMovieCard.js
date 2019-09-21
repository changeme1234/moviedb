import React from 'react'
import PropTypes from 'proptypes'
import { Image } from 'react-native'
import { Text, View } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

const limitWords = (str) => {
  try {
    return str.substring(0, 100) + '...'
  } catch (_) {
    return str
  }
}

export default function HorizontalMovieList ({ movie, navigation }) {
  const onPress = () => {
    navigation.navigate('MovieDetail', { id: movie.id })
  }
  return (
    <View style={{ width: 300, marginLeft: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: 300, height: 160, resizeMode: 'contain' }}
          source={{ uri: `https://image.tmdb.org/t/p/w300${movie.backdrop_path}` }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{movie.title}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: 'gray' }}>{limitWords(movie.overview)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

HorizontalMovieList.propTypes = {
  movie: PropTypes.object,
  navigation: PropTypes.object,
}
