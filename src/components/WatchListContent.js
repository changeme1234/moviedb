import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ActivityIndicator } from 'react-native'

import { getSession } from '../storage'
import MovieDB from '../controllers/MovieDb'
import MovieList from './MovieList'

export class WatchListContent extends Component {
  state = {
    loading: true,
    movies: [],
  }

  async componentDidMount () {
    const sessionId = await getSession()

    const movies = await MovieDB.getWatchlist(sessionId)
    this.setState({ ...this.state, loading: false, movies })
  }

  async componentWillUnmount () {
    this.setState({ loading: true })
  }

  render () {
    const { loading, movies } = this.state
    const { navigation } = this.props

    if (loading) return <ActivityIndicator />
    return (
      <MovieList movies={movies} navigation={navigation} />
    )
  }
}

WatchListContent.propTypes = {
  navigation: PropTypes.object,
}
