import { View, Text ,Dimensions} from 'react-native'
import React from 'react'

const DotComponent = ({selected}) => {
    const {height,width} = Dimensions.get('window');
    let backgroundColor = selected ? '#D0FD3E': '#3A3A3C'
    let size = selected ? 10:5
  return (
    <View
            style={{
                width: size*2,
                height: size,
                borderRadius: size / 2,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
  )
}

export default DotComponent