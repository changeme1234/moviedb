import React from 'react'
import { Image, View } from 'react-native'
import { Card, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MovieCard () {
  return (
    <Card style={{ padding: 2.5 }} >
      <TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ overflow: 'hidden' }}>
            <Image
              style={{ width: 110, height: 180, resizeMode: 'contain', borderRadius: 15 }}
              source={{ uri: 'https://image.tmdb.org/t/p/w1280/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg' }}
            />
          </View>
          <View style={{ marginLeft: 10, justifyContent: 'space-between', flex: 1 }}>
            <View >
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>BumbleBee</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'gray', fontSize: 14 }}>2018 </Text>
                <View style={{ borderLeftWidth: 1, borderColor: 'gray' }} />
                <Text style={{ color: 'gray', fontSize: 14 }}> En</Text>
              </View>
              <View>
                <Text style={{ color: 'gray', fontSize: 14 }}>Action, Adventure</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 14 }}>6.6</Text>
              </View>
              <View style={{ padding: 5 }}>
                <Icon style={{ width: 30, height: 25, color: 'gray' }} name='dots-vertical' type='MaterialCommunityIcons' />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    </Card>
  )
}
