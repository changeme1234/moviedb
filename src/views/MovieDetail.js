import React from 'react'
import PropTypes from 'proptypes'
import { Container, Content } from 'native-base'

import MovieDetailContent from '../components/MovieDetailContent'
import Header from '../components/Header'

export default function MovieDetail ({ navigation }) {
  const id = 1771

  return (
    <Container>
      <Header navigation={navigation} title='Movie details' />
      <Content>
        <MovieDetailContent id={id} />
      </Content>
    </Container>
  )
}

MovieDetail.propTypes = {
  navigation: PropTypes.object,
}
