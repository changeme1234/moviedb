import React from 'react'
import PropTypes from 'proptypes'
import { Image, View } from 'react-native'
import { Card, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getGenresFromId } from '../utils'

const styles = {
  image: { width: 100, height: 140, resizeMode: 'contain', borderRadius: 15 },
  dotImage: { width: 30, height: 25, color: 'gray' },
  desc: { color: 'gray', fontSize: 14 },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' },
  voteAverage: { color: 'gray', fontWeight: 'bold', fontSize: 14 },
}
export default function MovieCard ({
  movie,
  navigation,
}) {
  const onPress = () => {
    navigation.navigate('MovieDetail', { id: movie.id })
  }

  return (
    <Card style={{ padding: 5 }} >
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ overflow: 'hidden' }}>
            <Image
              style={styles.image}
              source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
            />
          </View>
          <View style={{ marginLeft: 10, justifyContent: 'space-between', flex: 1 }}>
            <View >
              <Text
                style={{ fontWeight: 'bold', fontSize: 18 }}
              >
                {movie.title}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={styles.desc}>
                  {movie.release_date.substring(0, 4)}
                </Text>
                <View style={{ borderLeftWidth: 1, borderColor: 'gray' }} />
                <Text style={styles.desc}> {movie.original_language}</Text>
              </View>
              <View>
                <Text style={styles.desc}>
                  {getGenresFromId(movie.genre_ids)}
                </Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.voteAverage}>{movie.vote_average}</Text>
              </View>
              <View style={{ padding: 5 }}>
                <Icon style={styles.dotImage}
                  name='dots-vertical'
                  type='MaterialCommunityIcons' />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  navigation: PropTypes.object,
}
