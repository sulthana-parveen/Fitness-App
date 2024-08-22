import { View, Text, ImageBackground, TextInput ,Dimensions, TouchableOpacity, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const AuthScreen = ({navigation}) => {
    const {height,width} = Dimensions.get('window');
    const [isLogin, setIsLogin] = useState(true);
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const SignUp = async() => {
       if(password !== confirmPassword){
        Alert.alert('Passwords do not match!');
        return;
       }
       try{
        const userCredential = await auth().createUserWithEmailAndPassword(userName, password);
        const user = userCredential.user;

       
        await firestore().collection('users').doc(user.uid).set({
            email: user.email,
            createdAt: firestore.FieldValue.serverTimestamp(),
        });
         Alert.alert('Sign Up Successfull');
         navigation.navigate('BottomTab')
       }catch(error){
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('The password is too weak!');
        } else {
          Alert.alert('Error', error.message);
        }
      }
    }
    const SignIn = async() => {
       try{
        await auth().signInWithEmailAndPassword(userName,password);
        Alert.alert('Sign In Successfull');
        navigation.navigate('BottomTab')
       }catch(error){
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('No user found with that email address!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Incorrect password!');
        } else {
          Alert.alert('Error', error.message);
        }
      }
       
    }
  return (
    <View style={{backgroundColor:'black',flex:1}}>
     <ImageBackground 
     style={{height:430,width:513}}
     source={require('../assets/Rectangle.png')}>
      <View style={{ flexDirection: 'row', marginTop: height * 0.05, marginLeft:width*0.07 }}>
                    <TouchableOpacity onPress={() => setIsLogin(true)} style={{ alignItems: 'center' }}>
                        <Text style={{ color:  'white', fontWeight: isLogin ? 'bold' : 'normal' }}>Login</Text>
                        {isLogin && <View style={{ height: 2, width: '100%', backgroundColor: '#D0FD3E', marginTop: 4 }} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsLogin(false)} style={{ alignItems: 'center' , marginLeft:width*0.07}}>
                        <Text style={{ color:  'white', fontWeight: !isLogin ? 'bold' : 'normal' }}>Signup</Text>
                        {!isLogin && <View style={{ height: 2, width: '100%', backgroundColor: '#D0FD3E', marginTop: 4 }} />}
                    </TouchableOpacity>
                </View>
     <View>
     <Text style={{
        color:'white',
        fontWeight:'bold',
        fontSize:40,
        marginTop:height*0.25,
        marginLeft:height*0.01
     }}>  {isLogin ? 'WELCOME BACK,' : 'HELLO ROOKIES'}</Text>
     <TextInput
      placeholder='Email'
      value={userName}
      onChangeText={(text) => setUserName(text)}
      placeholderTextColor={'lightgrey'}
      style={{
       borderBottomWidth:1,
        borderBottomColor:'grey',
        width:width*0.7,
        marginLeft:height*0.025,
        marginTop:height*0.05,
        color:'lightgrey'
    }}
     />
      <TextInput
      placeholder='Password'
      placeholderTextColor={'lightgrey'}
      value={password}
      onChangeText={(text) => setPassword(text)}
      style={{
       borderBottomWidth:1,
        borderBottomColor:'grey',
        width:width*0.7,
        marginLeft:height*0.025,
        marginTop:height*0.05,
        color:'lightgrey'
    }}
     />
     {!isLogin &&(
      
       <TextInput
       placeholder='Password again'
       placeholderTextColor={'lightgrey'}
       value={confirmPassword}
      onChangeText={(text) => setConfirmPassword(text)}
       style={{
        borderBottomWidth:1,
         borderBottomColor:'grey',
         width:width*0.7,
         marginLeft:height*0.025,
         marginTop:height*0.05,
         color:'lightgrey'
     }}
      />
     )}
     <View >
     {isLogin&&(
        <Text style={{color:'#D0FD3E',marginTop:height*0.03,marginLeft:width*0.65}}>Forgot Password</Text>
     )}
     </View>
     <View style={{flexDirection:'row',marginTop:height*0.14,marginLeft:height*0.09}}>
       <TouchableOpacity style={{height:height*0.05,width:width*0.1,backgroundColor:'grey',borderRadius:60,alignItems:'center',justifyContent:'center'}}>
        <Image style={{}} source={require('../assets/Apple.png')}/>
       </TouchableOpacity>
       <TouchableOpacity style={{height:height*0.05,width:width*0.1,backgroundColor:'grey',borderRadius:60,alignItems:'center',justifyContent:'center',marginLeft:height*0.035}}>
        <Image style={{}} source={require('../assets/Google.png')}/>
       </TouchableOpacity>
       <TouchableOpacity style={ {marginLeft:height*0.03,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        backgroundColor: '#D0FD3E',
                                        width:width*0.27,
                                        borderRadius: 48,}}
                                        onPress={() => {
                                          if(isLogin){
                                           SignIn()
                                          }else{
                                            SignUp()
                                          }
                                        } }>
                    <Text style={{alignSelf:'center',color:'black',justifyContent:'center'}}>{isLogin ? 'Login':'Sign Up'}</Text>
                </TouchableOpacity>
     </View>
     </View>
     </ImageBackground>
    </View>
  )
}

export default AuthScreen;