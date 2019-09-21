import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

import HorizontalMovieCard from './HorizontalMovieCard'
import MovieDB from '../controllers/MovieDb'

export default class HorizontalMovieList extends Component {
  state = {
    movies: [],
    loading: true,
  }

  async componentDidMount () {
    const { type } = this.props
    const movies = await MovieDB.getMovies(type)

    this.setState({ movies, loading: false })
  }

  render () {
    const { loading, movies } = this.state
    const { navigation, style, title } = this.props

    if (loading) return <ActivityIndicator />
    return (
      <View style={style}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
          <ScrollView horizontal style={{ marginTop: 10 }}>
            {movies.map(movie => <HorizontalMovieCard movie={movie} key={movie.id} navigation={navigation} />)}
          </ScrollView>
        </View>
      </View>
    )
  }
}

HorizontalMovieList.propTypes = {
  navigation: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
}
