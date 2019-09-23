import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ActivityIndicator } from 'react-native'
import { Text, View } from 'native-base'

import MovieDB from '../controllers/MovieDb'
import MovieDetailHeader from './MovieDetailHeader'
import MovieDetailRating from './MovieDetailRating'

const getGenres = (arr) => {
  return arr.reduce((acc, elem) => {
    if (acc === '') return elem.name
    return `${acc}, ${elem.name}`
  }, '')
}

export default class MovieDetailContent extends Component {
  state = {
    loading: true,
    movie: {},
  }

  async componentDidMount () {
    const { id } = this.props
    const movie = await MovieDB.getMovieDetail(id)

    this.setState({ ...this.state, movie, loading: false })
  }

  render () {
    const { loading, movie } = this.state

    if (loading) { return <ActivityIndicator /> }

    return (
      <View>
        <MovieDetailHeader movie={movie} />
        <View style={{ marginLeft: 20, marginRight: 10 }}>
          <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'space-around' }}>
            <View style={{ width: '33%' }} >
              <Text style={{ fontWeight: 'bold' }}>Duration</Text>
              <Text style={{ color: 'gray', marginTop: 10 }}>{movie.runtime}m</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text style={{ fontWeight: 'bold' }}>Genre</Text>
              <Text style={{ color: 'gray', marginTop: 10 }}>{getGenres(movie.genres)}</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text style={{ fontWeight: 'bold' }}>Language</Text>
              <Text style={{ color: 'gray', marginTop: 10 }}>{movie.original_language}</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Synopsis</Text>
            <Text style={{ color: 'gray', marginTop: 10 }}>{movie.overview}</Text>
          </View>
          <MovieDetailRating movie={movie} />
        </View>

      </View>
    )
  }
}

MovieDetailContent.propTypes = {
  id: PropTypes.number,
}
