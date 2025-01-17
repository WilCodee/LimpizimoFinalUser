import React from 'react';
import {Text} from 'react-native';

const Default = ({
  color = '#5f2490',
  fontSize = 12,
  fontWeight = 'normal',
  value = 'Hello world',
  fontStyle = 'normal',
  textAlign = 'left',
  otherStyle,
}) => {
  return (
    <Text
      style={{
        fontSize,
        fontWeight,
        color,
        fontStyle,
        textAlign,
        ...otherStyle,
      }}>
      {value}
    </Text>
  );
};

export default Default;
