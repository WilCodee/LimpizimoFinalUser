import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Default = ({
  title,
  width,
  backgroundColor = '#5f2490',
  color = 'white',
  onPress,
  height = 45,
  borderRadius = 60,
  marginBottom = 4,
  marginTop = 4,
  borderWidth = 1,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height,
        width,
        borderWidth,
        borderColor,
        borderRadius,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom,
        marginTop,
      }}>
      <Text style={{color, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Default;
