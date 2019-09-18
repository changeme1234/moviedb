import React from 'react'
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base'

import MovieList from '../components/MovieList'

export default function Home () {
  return (
    <Container>
      <Content>
        <View style={{}}>
          <Text>Home Screen</Text>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <MovieList />
          </View>
        </View>
      </Content>
    </Container>

  )
}
