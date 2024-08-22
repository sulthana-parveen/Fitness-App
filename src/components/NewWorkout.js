import React from 'react';
import { View, FlatList, ImageBackground, Dimensions, StyleSheet,Text } from 'react-native';

const data = [
  { id: '1', image: require('../assets/grid1.png') },
  { id: '2', image: require('../assets/grid2.png') },
  { id: '3', image: require('../assets/grid1.png') },
  { id: '4', image: require('../assets/grid2.png') },
  
];

const NewWorkout = () => {
  const { height, width } = Dimensions.get('window');

  const renderItem = ({ item }) => (
    <View style={{flex:1,margin:5}}>
      <ImageBackground
        source={item.image}
        style={ { height: height * 0.25 ,borderRadius:10,width:'100%'}}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={{padding:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{color:'white',fontSize:15}}>New Workout</Text>
      
   </View>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} 
      contentContainerStyle={{ padding: 5,margin:5}}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 5,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    borderRadius: 10,
    width: '100%',
  },
});

export default NewWorkout;
