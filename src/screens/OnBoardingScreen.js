import { View, Text, Image,Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import DotComponent from '../components/DotComponent';

const OnBoardingScreen = ({navigation}) => {
    const{height,width}= Dimensions.get('window')
    
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
       DotComponent={DotComponent}
        pages={[
          {
            backgroundColor: 'black',
            image: (
              <Image
                resizeMode='cover'
                source={require('../assets/pic1.png')}
                style={{ width: width*1, height: height*0.6,
                    marginTop: -height * 0.25, 
                }} 
              />
            ),
            title: 'MEET YOUR COACH',
            subtitle: 'START YOUR JOURNEY',
            titleStyles:{
                color:'white',
                fontWeight:'bold'
            },
            subTitleStyles:{
                color:'white',
                fontWeight:'bold',
                fontSize:height*0.025,
            }
          },
          {
            backgroundColor: 'black',
            image: (
              <Image
                resizeMode='cover'
                source={require('../assets/pic3.png')}
                style={{ width: width*1, height: height*0.6,
                    marginTop: -height * 0.25, 
                }} 
              />
            ),
            title: 'CREATE WORKOUT PLAN',
            subtitle: 'STAY FIT',
            titleStyles:{
                color:'white',
                fontWeight:'bold'
            },
            subTitleStyles:{
                color:'white',
                fontWeight:'bold',
                fontSize:height*0.025,
            }
          },
          {
            backgroundColor: 'black',
            image: (
              <Image
                resizeMode='cover'
                source={require('../assets/pic2.png')}
                style={{ width: width*1, height: height*0.6,
                    marginTop: -height * 0.25, 
                }} 
              />
            ),
            title: 'ACTION IS THE',
            subtitle: (
                <View style={{alignItems:'center'}}>
                    <Text style={{ color:'white',
                fontWeight:'bold',
                fontSize:height*0.025,}}>KEY TO ALL SUCCESS</Text>
                <TouchableOpacity style={ { marginTop: 20,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        backgroundColor: '#D0FD3E',
                                        borderRadius: 48,}}
                                        onPress={() => navigation.navigate('AuthScreen') }>
                    <Text style={{alignSelf:'center',color:'black',justifyContent:'center'}}>Start Now</Text>
                </TouchableOpacity>
                </View>
            ),
          
            titleStyles:{
                color:'white',
                fontWeight:'bold'
            },
            subTitleStyles:{
                color:'white',
                fontWeight:'bold',
                fontSize:height*0.025,
            }
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;
