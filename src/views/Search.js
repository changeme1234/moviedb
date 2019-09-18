import React from 'react'
import { Text } from 'react-native'
import ShowCase from '../components/ShowCase'
import { Content, Container } from 'native-base'

export default function Search () {
  return (
    <Container style={{ }}>
      <Content >
        <Text>Search Screen</Text>
        <ShowCase />
      </Content>
    </Container>
  )
}
