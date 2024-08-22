import { View, Text, Dimensions, ScrollView } from 'react-native'
import React ,{useState,useEffect}from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import NewWorkout from '../components/NewWorkout'
import auth from '@react-native-firebase/auth';
const HomeScreen = () => {
    const{height,width} = Dimensions.get('window')
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = auth().currentUser;
        if (user) {
            setUserName(user.displayName || user.email);
        }
    }, []);
  return (
   <ScrollView>
     <View style={{backgroundColor:'black',flex:1}}>
      <Text style={{color:'white',fontSize:25,fontWeight:'bold',padding:10}}>Hello {userName ? userName : 'User'},</Text>
      <Text style={{color:'white',fontSize:23,marginLeft:width*0.03}}>Good Morning,</Text>
      <Banner/>
      <Categories/>
      <NewWorkout/>
    </View>
   </ScrollView>
  )
}

export default HomeScreen