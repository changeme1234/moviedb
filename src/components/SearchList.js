import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { View } from 'native-base'

import ShowCase from './ShowCase'
import SearchInput from './SearchInput'
import MovieDB from '../controllers/MovieDb'
import MovieCard from './MovieCard'

export default class SearchList extends Component {
  state = {
    movies: [],
    query: '',
  }

  search = async (field, value) => {
    let movies = []
    if (value !== '') {
      movies = await MovieDB.searchMovies(value)
    }

    this.setState({ movies, [field]: value })
  }

  render () {
    const { movies } = this.state
    const { navigation } = this.props

    return (
      <View>
        <SearchInput
          placeholder='Search movies...'
          onChangeText={value => this.search('query', value)}
        />
        { movies.length !== 0
          ? movies.map(p => <MovieCard {...p} navigation={navigation} key={p.id} />)
          : <ShowCase style={{ marginTop: 10 }} />
        }
      </View>

    )
  }
}

SearchList.propTypes = {
  navigation: PropTypes.object,
}
