import React from 'react'
import PropTypes from 'prop-types'
import { Body, Button, Header as NBHeader, Icon, Left, Right, Title } from 'native-base'

export default function Header ({ navigation, title }) {
  return (
    <NBHeader transparent style={{ backgroundColor: '#FFF' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon style={{ color: 'black' }} name='arrowleft' type='AntDesign' />
        </Button>
      </Left>
      <Body style={{ flex: 2 }}>
        <Title >
          {title}
        </Title>
      </Body>
      <Right />
    </NBHeader>
  )
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
}
