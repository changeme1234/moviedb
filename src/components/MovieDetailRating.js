import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { Button, Icon, Text, View, Toast } from 'native-base'
import { Rating } from 'react-native-ratings'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getSession } from '../storage'
import MovieDB from '../controllers/MovieDb'

const isRated = async (movie) => {
  const sessionId = await getSession()
  const arr = await MovieDB.getRatedMovies(sessionId)

  const obj = arr.find((elem) => elem.id === movie.id)

  return obj ? obj.rating : null
}

export default class MovieDetailRating extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showRating: false,
      rating: null,
    }
  }

  async componentDidMount () {
    const { movie } = this.props

    try {
      const rating = await isRated(movie)
      if (rating) {
        this.setState({ rating, showRating: true })
      }
    } catch (err) {
      alert(err)
    }
  }

  removeRating = async () => {
    const { movie } = this.props

    this.setState({ showRating: false })

    const sessionId = await getSession()
    console.log(sessionId)
    await MovieDB.deleteRating(sessionId, movie.id)

    Toast.show({
      text: 'Rating Removed',
    })
  }

  addRating = () => this.setState({ showRating: true })

  ratingCompleted = async (movieId, rating) => {
    const sessionId = await getSession()
    try {
      await MovieDB.addRating(sessionId, movieId, rating)
      Toast.show({
        text: 'Rating Added',
      })
    } catch (err) {
      alert(err)
    }
  }

  render () {
    const { showRating, rating } = this.state
    const { movie } = this.props

    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Your Rating</Text>
        {showRating
          ? <View>
            <View style={{ alignSelf: 'flex-end' }}>
              <TouchableOpacity onPress={this.removeRating}>
                <Icon name='remove' type='FontAwesome' style={{ color: 'gold' }} />
              </TouchableOpacity>
            </View>
            <Rating
              ratingCount={10}
              startingValue={rating}
              imageSize={30}
              onFinishRating={(val) => this.ratingCompleted(movie.id, val)}
              showRating
              style={{ paddingVertical: 10 }}
            />

          </View>
          : <View style={{ alignSelf: 'center' }}>
            <Button onPress={this.addRating} style={{ width: '40%', backgroundColor: 'gold' }}>
              <Text>Rate it</Text>
              <Icon name='star' />
            </Button>
          </View>
        }
      </View>
    )
  }
}

MovieDetailRating.propTypes = {
  movie: PropTypes.object,
}
