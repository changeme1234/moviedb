import React from 'react'
import PropTypes from 'proptypes'
import { Container, Content, Root } from 'native-base'

import MovieDetailContent from '../components/MovieDetailContent'
import Header from '../components/Header'

export default function MovieDetail ({ navigation }) {
  const id = navigation.getParam('id')

  return (
    <Root>
      <Container>
        <Header navigation={navigation} title='Movie details' />
        <Content>
          <MovieDetailContent id={id} />
        </Content>
      </Container>
    </Root>

  )
}

MovieDetail.propTypes = {
  navigation: PropTypes.object,
}
