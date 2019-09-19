import React from 'react'
import { Text } from 'react-native'
import ShowCase from '../components/ShowCase'
import { Content, Container, Header } from 'native-base'

export default function Search () {
  return (
    <Container style={{ }}>
      <Header />
      <Content >
        <Text>Search Screen</Text>
        <ShowCase />
      </Content>
    </Container>
  )
}
