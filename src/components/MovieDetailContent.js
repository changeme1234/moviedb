import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ActivityIndicator } from 'react-native'
import { Text, View } from 'native-base'

import MovieDB from '../controllers/MovieDb'
import MovieDetailHeader from './MovieDetailHeader'
import MovieDetailRating from './MovieDetailRating'

const styles = {
  title: { fontWeight: 'bold' },
  column: { width: '33%' },
  desc: { color: 'gray', marginTop: 10 },
  columnsView: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-around' },
}

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
          <View style={styles.columnsView}>
            <View style={styles.column} >
              <Text style={styles.title}>Duration</Text>
              <Text style={styles.desc}>{movie.runtime}m</Text>
            </View>
            <View style={styles.colum}>
              <Text style={styles.title}>Genre</Text>
              <Text style={styles.desc}>{getGenres(movie.genres)}</Text>
            </View>
            <View style={styles.colum}>
              <Text style={styles.title}>Language</Text>
              <Text style={styles.desc}>{movie.original_language}</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Synopsis</Text>
            <Text style={styles.desc}>{movie.overview}</Text>
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
