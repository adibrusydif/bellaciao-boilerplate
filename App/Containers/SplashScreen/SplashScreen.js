import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    console.tron.log('MASUK SPLASH')
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          <Image style={Helpers.fullSize} source={Images.dali} resizeMode={'contain'} />
          <Text>Bella Ciao</Text>
        </View>
      </View>
    )
  }
}
