import React from 'react'
import PropTypes from 'proptypes'
import { View } from 'native-base'

import MovieCard from './MovieCard'

export default function MovieList ({ style, movies, navigation }) {
  return (
    <View style={style}>
      {movies.map(p => <MovieCard {...p} key={p.id} navigation={navigation} />)}
    </View>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array,
  navigation: PropTypes.object,
  style: PropTypes.object,
}
