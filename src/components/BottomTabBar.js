import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Footer, FooterTab } from 'native-base'

const tabs = [
  {
    route: 'Home',
    name: 'md-home',
    type: 'Ionicons',
  },
  {
    route: 'Search',
    name: 'search',
    type: 'Ionicons',
  },
  {
    route: 'WatchList',
    name: 'watch-later',
    type: 'MaterialIcons',
  },
  {
    route: 'Settings',
    name: 'user',
    type: 'FontAwesome',
  },
]

function ButtonTab ({ navigate, route, name, type }) {
  return (
    <Button onPress={() => navigate(route)} >
      <Icon name={name} type={type} style={{ color: 'black' }} />
    </Button>
  )
}

ButtonTab.propTypes = {
  name: PropTypes.string,
  navigate: PropTypes.func,
  route: PropTypes.string,
  type: PropTypes.string,
}

export default function BottomTabBar ({ navigation }) {
  const { navigate } = navigation

  return (
    <Footer style={{ backgroundColor: '#FFF' }}>
      <FooterTab style={{ backgroundColor: '#FFF' }}>
        {tabs.map(p => <ButtonTab {...p} navigate={navigate} key={p.route} />)}
      </FooterTab>
    </Footer>
  )
}

BottomTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
}
