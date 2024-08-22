import { View, Text, ImageBackground, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Categories = () => {
  const { height, width } = Dimensions.get('window');
  const [activeLevel,setActiveLevel] = useState('Beginner');
  const getButtonStyle = (level) => {
    return {
      flex: 1,
      alignItems: 'center',
      padding: 10,
     // borderRadius: 20,
      backgroundColor: activeLevel === level ? '#D0FD3E' : '#333', 
    
    };
  };

  const getTextStyle = (level) => {
    return {
      color: activeLevel === level ? '#333' : 'white', 
      fontSize: 14,
    };
  };
  return (
    <View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 15 }}>Workout Categories</Text>
          <Text style={{ color: '#D0FD3E', fontSize: 12 }}>See All</Text>
        </View>
      </View>
      <View>
      <View style={{ flexDirection: 'row', padding:10,borderRadius:20 }}>
        <TouchableOpacity style={getButtonStyle('Beginner')} onPress={() => setActiveLevel('Beginner')}>
          <Text style={getTextStyle('Beginner')}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getButtonStyle('Intermediate')} onPress={() => setActiveLevel('Intermediate')}>
          <Text style={getTextStyle('Intermediate')}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getButtonStyle('Advanced')} onPress={() => setActiveLevel('Advanced')}>
          <Text style={getTextStyle('Advanced')}>Advanced</Text>
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView
        style={{ padding: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 10, borderRadius: 20, overflow: 'hidden' }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 20 }}
              source={require('../assets/categories.png')}
              style={{ height: height * 0.25, width: width * 0.7, justifyContent: 'flex-end', padding: 15 }}
            >
              <View style={{ padding: 15, marginTop: height * 0.15 }}>
                <Text style={{ color: 'white', fontSize: 14 }}>Learn the Basics of Training</Text>
                <Text style={{ color: '#D0FD3E', fontSize: 12 }}>| 06 Workouts for Beginners</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{ borderRadius: 20, overflow: 'hidden' }}>
            <ImageBackground
              resizeMode='cover'
              imageStyle={{ borderRadius: 20 }}
              source={require('../assets/Card.png')}
              style={{ height: height * 0.25, width: width * 0.7, justifyContent: 'flex-end', padding: 15 }}
            >
              <View style={{ padding: 15, marginTop: height * 0.15 }}>
              <Text style={{ color: 'white', fontSize: 14 }}>Learn the Basics of Training</Text>
              <Text style={{ color: '#D0FD3E', fontSize: 12 }}>| 06 Workouts for Beginners</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Categories;
