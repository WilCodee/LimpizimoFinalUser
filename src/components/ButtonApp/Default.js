import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

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
  position = 'center',
  icon,
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
        alignItems: position,
        flexDirection: icon ? 'row' : 'column',
        justifyContent: 'center',
        marginBottom,
        marginTop,
        paddingHorizontal: 20,
      }}>
      {icon && (
        <Image
          source={icon}
          style={{width: 40, height: 20}}
          resizeMode="contain"
        />
      )}
      <Text style={{color, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Default;
