import { View, Text, ImageBackground, TextInput ,Dimensions, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Login = () => {
    const {height,width} = Dimensions.get('window');
  return (
    <View>
      <Text style={{
        color:'white',
        fontWeight:'bold',
        fontSize:40,
        marginTop:height*0.3,
        marginLeft:height*0.02
     }}>WELCOME BACK,</Text>
     <TextInput
      placeholder='Email'
      style={{
        borderWidth:1,
        borderColor:'grey',
        width:width*0.8,
        marginLeft:height*0.02,
        marginTop:height*0.05
    }}
     />
     <TextInput
      placeholder='Email'
      style={{
        borderWidth:1,
        borderColor:'grey',
        width:width*0.8,
        marginLeft:height*0.02,
        marginTop:height*0.05
    }}
     />
     <View >
     <Text style={{color:'#D0FD3E',marginTop:height*0.03,}}>Forgot Password</Text>
     </View>
     <View style={{flexDirection:'row',marginTop:height*0.15,marginLeft:height*0.09}}>
       <TouchableOpacity style={{height:height*0.05,width:width*0.1,backgroundColor:'grey',borderRadius:60,alignItems:'center',justifyContent:'center'}}>
        <Image style={{}} source={require('../assets/Apple.png')}/>
       </TouchableOpacity>
       <TouchableOpacity style={{height:height*0.05,width:width*0.1,backgroundColor:'grey',borderRadius:60,alignItems:'center',justifyContent:'center',marginLeft:height*0.035}}>
        <Image style={{}} source={require('../assets/Google.png')}/>
       </TouchableOpacity>
       <TouchableOpacity style={ {marginLeft:height*0.035,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        backgroundColor: '#D0FD3E',
                                        borderRadius: 48,}}
                                        onPress={() => navigation.navigate('AuthScreen') }>
                    <Text style={{alignSelf:'center',color:'black',justifyContent:'center'}}>Login</Text>
                </TouchableOpacity>
     </View>
     </View>
   
  )
}

export default Login