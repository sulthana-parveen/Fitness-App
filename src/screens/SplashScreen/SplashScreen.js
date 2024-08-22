import { View, Text ,Dimensions, Image} from 'react-native'
import React, { useEffect } from 'react'
import styles from './style'
const SplashScreen = ({navigation}) => {
  const {height,width} = Dimensions.get('window')

  useEffect(() => {
    const timer = setTimeout(() => {
          navigation.replace('OnBoardingScreen');
    },3000)
    return () => clearTimeout(timer)
  },[navigation])
  return (
    <View style={{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Image
      source={require('../../assets/main.png')}
      style={{height:150,width:150}}
      />
      <Image
      source={require('../../assets/Logo.png')}
      />
    </View>
  )
}


export default SplashScreen