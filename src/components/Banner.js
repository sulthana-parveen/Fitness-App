import { View, Text, ImageBackground ,Dimensions} from 'react-native'
import React from 'react'

const Banner = () => {
    const{height,width} = Dimensions.get('window')
  return (
       <View>
        <View style={{padding:10}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:15}}>Today workout plan</Text>
        <Text style={{color:'#D0FD3E',fontSize:12}}>Monday 19 feb</Text>
     </View>
    <View style={{marginVertical: 10, borderRadius: 20, overflow: 'hidden', paddingHorizontal: 10}}>
    <ImageBackground
        resizeMode='cover'
        source={require('../assets/Card.png')}
        style={{height: height * 0.25, width: width - 20, justifyContent: 'flex-end', padding: 15 }}>
        <View style={{padding:15,marginTop:height*0.15}}>
        <Text style={{color:'white',fontSize:14}}>Day 01 - Warm Up</Text>
        <Text style={{color:'#D0FD3E',fontSize:12}}>7.00 - 8.00 AM</Text>
        </View>
       
        </ImageBackground>
    </View>
    </View>
       </View>
  )
}

export default Banner