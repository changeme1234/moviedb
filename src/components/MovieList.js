import React, { Component } from 'react'
import { View } from 'native-base'

import MovieCard from './MovieCard'

export default class MovieList extends Component {
  render () {
    return (
      <View>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </View>
    )
  }
}
