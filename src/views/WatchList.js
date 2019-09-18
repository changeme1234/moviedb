import React from 'react'
import PropTypes from 'proptypes'
import { Container, Content, View } from 'native-base'

import { WatchListContent } from '../components/WatchListContent'

export default function WatchList ({ navigation }) {
  return (
    <Container>
      <Content>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <WatchListContent navigation={navigation} />
        </View>
      </Content>

    </Container>
  )
}

WatchList.propTypes = {
  navigation: PropTypes.object,
}
