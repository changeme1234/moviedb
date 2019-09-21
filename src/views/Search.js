import React from 'react'
import PropTypes from 'proptypes'
import { Content, Container, Header } from 'native-base'

import SearchList from '../components/SearchList'

export default function Search ({ navigation }) {
  return (
    <Container >
      <Header />
      <Content contentContainerStyle={{ margin: 5 }}>
        <SearchList navigation={navigation} />
      </Content>
    </Container>
  )
}

Search.propTypes = {
  navigation: PropTypes.object,
}
