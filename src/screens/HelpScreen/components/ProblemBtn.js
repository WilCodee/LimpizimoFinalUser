import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';

import {Icon} from 'react-native-elements';
import colors from '../../../constants/colors';

const ProblemBtn = ({title, image}) => {
  return (
    <View style={{alignItems: 'center', marginBottom: 30}}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.textInputColor,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '90%',
            paddingVertical: 13,
            borderRadius: 30,
          }}>
          <Image
            source={image}
            style={{width: 35, height: 35}}
            resizeMode="contain"
          />
          <Text>{title}</Text>
          <Icon size={25} name="east" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProblemBtn;
