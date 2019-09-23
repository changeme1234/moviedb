import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { ImageBackground } from 'react-native'
import { Icon, Text, Toast, View } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import MovieDB from '../controllers/MovieDb'
import { getSession } from '../storage'

const isWatchlisted = async (movie) => {
  const sessionId = await getSession()
  const arr = await MovieDB.getWatchlist(sessionId)

  const obj = arr.find((elem) => elem.id === movie.id)

  return !!obj
}

export default class MovieDetailHeader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      favorites: false,
      watchlist: false,
    }
  }

  async componentDidMount () {
    const { movie } = this.props
    const isListed = await isWatchlisted(movie)

    this.setState({ watchlist: isListed })
  }

  onToggle = async (type) => {
    const { movie } = this.props

    this.setState({ [type]: !this.state[type] })

    const sessionId = await getSession()

    if (type === 'watchlist') {
      try {
        await MovieDB.addWatchlist(sessionId, movie.id, this.state[type])
      } catch (err) {
        alert(err)
      }
    }

    if (this.state[type] === true) {
      Toast.show({
        text: `Added to ${type}`,
      })
    }
  }

  render () {
    const { movie } = this.props
    const { watchlist, favorites } = this.state
    const watchlistColor = watchlist ? 'gold' : 'white'
    const favoriteColor = favorites ? 'magenta' : 'white'

    return (
      <View>
        <View style={{ height: 205 }}>
          <ImageBackground
            style={{ height: 200, color: 'black' }}
            source={{ uri: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` }}
          >
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(52, 52, 52, 0.5)' }}>
              <View style={{ marginTop: 10, marginRight: 10, flexDirection: 'row', alignSelf: 'flex-end' }}>
                <TouchableOpacity onPress={() => this.onToggle('favorites')}>
                  <Icon style={{ fontSize: 35, color: favoriteColor }} name='heart' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onToggle('watchlist')}>
                  <Icon style={{ fontSize: 35, color: watchlistColor, marginLeft: 10 }} name='bookmark' type='Feather' />
                </TouchableOpacity>
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
    )
  }
}

MovieDetailHeader.propTypes = {
  movie: PropTypes.object,
}
