import React from 'react'
import PropTypes from 'proptypes'
import { Image } from 'react-native'
import { View } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ShowCase ({ style }) {
  return (
    <View style={style}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/lcq8dVxeeOqHvvgcte707K0KVx5.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/zfE0R94v1E8cuKAerbskfD3VfUt.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/cCTJPelKGLhALq3r51A9uMonxKj.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/eeHI5iBSCOxj4HGSOmFM6azBmwb.jpg' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/qAwFbszz0kRyTuXmMeKQZCX3Q2O.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/hGBgv2Ir3t1wMP1Xp5CAQXArkV9.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/sYPOQI57JVNmjiLI3KeZ5KA8O9i.jpg' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w200/mQaM8fDQdFWwCTFp0TZG8fChlZ5.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 125, height: 180, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg' }}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

ShowCase.propTypes = {
  style: PropTypes.object,
}
