import React from 'react'
import PropTypes from 'proptypes'
import { Image, View } from 'react-native'
import { Card, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getGenresFromId } from '../utils'

export default function MovieCard ({
  title,
  poster_path: posterPath,
  release_date: releaseDate,
  original_language: originalLanguage,
  vote_average: voteAverage,
  genre_ids: genreIds,
  id,
  navigation,
}) {
  const onPress = () => {
    navigation.navigate('MovieDetail', { id })
  }

  return (
    <Card style={{ padding: 5 }} >
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ overflow: 'hidden' }}>
            <Image
              style={{ width: 100, height: 140, resizeMode: 'contain', borderRadius: 15 }}
              source={{ uri: `https://image.tmdb.org/t/p/w200${posterPath}` }}
            />
          </View>
          <View style={{ marginLeft: 10, justifyContent: 'space-between', flex: 1 }}>
            <View >
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'gray', fontSize: 14 }}>{releaseDate.substring(0, 4)} </Text>
                <View style={{ borderLeftWidth: 1, borderColor: 'gray' }} />
                <Text style={{ color: 'gray', fontSize: 14 }}> {originalLanguage}</Text>
              </View>
              <View>
                <Text style={{ color: 'gray', fontSize: 14 }}>{getGenresFromId(genreIds)}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 14 }}>{voteAverage}</Text>
              </View>
              <View style={{ padding: 5 }}>
                <Icon style={{ width: 30, height: 25, color: 'gray' }} name='dots-vertical' type='MaterialCommunityIcons' />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  )
}

MovieCard.propTypes = {
  genre_ids: PropTypes.array,
  id: PropTypes.number,
  navigation: PropTypes.object,
  original_language: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
}
