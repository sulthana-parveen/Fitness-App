import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import NewWorkout from '../components/NewWorkout'

const HomeScreen = () => {
    const{height,width} = Dimensions.get('window')
  return (
   <ScrollView>
     <View style={{backgroundColor:'black',flex:1}}>
      <Text style={{color:'white',fontSize:35,fontWeight:'bold',padding:10}}>Hello SARAH,</Text>
      <Text style={{color:'white',fontSize:23,marginLeft:width*0.03}}>Good Morning,</Text>
      <Banner/>
      <Categories/>
      <NewWorkout/>
    </View>
   </ScrollView>
  )
}

export default HomeScreen