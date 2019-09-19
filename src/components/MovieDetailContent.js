import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ActivityIndicator, ImageBackground } from 'react-native'
import { Icon, Text, View } from 'native-base'
import { Rating } from 'react-native-ratings'

import MovieDB from '../controllers/MovieDb'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        <View>
          <View style={{ height: 205 }}>
            <ImageBackground
              style={{ height: 200, color: 'black' }}
              source={{ uri: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` }}
            >
              <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(52, 52, 52, 0.5)' }}>
                <View style={{ marginTop: 10, marginRight: 10, flexDirection: 'row', alignSelf: 'flex-end' }}>
                  <TouchableOpacity><Icon style={{ fontSize: 35, color: 'white' }} name='heart' /></TouchableOpacity>
                  <TouchableOpacity><Icon style={{ fontSize: 35, color: 'white', marginLeft: 10 }} name='ios-add-circle-outline' /></TouchableOpacity>
                  <TouchableOpacity><Icon style={{ fontSize: 35, color: 'white', marginLeft: 10 }} name='ios-list' /></TouchableOpacity>
                </View>
                <View style={{ width: '80%', flex: 1, justifyContent: 'flex-end', marginLeft: 10 }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>{movie.title}</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>{movie.vote_average}</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={{ position: 'relative', top: -40, bottom: 0, right: 0, left: -20, alignSelf: 'flex-end' }}>
              <TouchableOpacity>
                <Icon style={{ fontSize: 80, color: 'red' }} name='ios-play-circle' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Rate it!</Text>
            <Rating
              ratingCount={10}
              startingValue={1.57}
              imageSize={30}
              onFinishRating={this.ratingCompleted}
              showRating
              style={{ paddingVertical: 10 }}
            />
          </View>
        </View>

      </View>
    )
  }
}

MovieDetailContent.propTypes = {
  id: PropTypes.number,
}
