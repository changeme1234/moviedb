import React from 'react'
import PropTypes from 'proptypes'
import { Container, Content, Header } from 'native-base'

import HorizonalMovieList from '../components/HorizonalMovieList'

export default function Home ({ navigation }) {
  return (
    <Container>
      <Header />
      <Content contentContainerStyle={{ margin: 10 }}>
        <HorizonalMovieList type='now_playing' title='Now Playing' navigation={navigation} />
        <HorizonalMovieList type='upcoming' title='Upcoming' navigation={navigation} />
        <HorizonalMovieList type='popular' title='Popular' navigation={navigation} />
        <HorizonalMovieList type='top_rated' title='Top Rated' navigation={navigation} />
      </Content>
    </Container>
  )
}

Home.propTypes = {
  navigation: PropTypes.object,
}
