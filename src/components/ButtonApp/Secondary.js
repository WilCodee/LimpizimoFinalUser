import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

const Secondary = ({
  title,
  onPress,
  textColor = 'white',
  height = 45,
  width = '60%',
  borderRadius = 60,
  marginBottom = 4,
  marginTop = 4,
  fontSize = 18,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height,
          width,
          borderRadius,
          borderWidth: 1,
          marginBottom,
          marginTop,
        }}>
        <Text style={{color: textColor, fontSize}}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Secondary;
