import {View, Text, Image} from 'react-native';
import React from 'react';
import Images from '../../../assets/images';
import colors from '../../../constants/colors';

const ProblemBtn = ({title}) => {
  return (
    <View style={{alignItems: 'center'}}>
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
          source={Images.service}
          style={{width: 35, height: 35}}
          resizeMode="contain"
        />
        <Text>Problemas con el servicios o tarifas</Text>
        <Image
          source={Images.whiteRightArrowV2}
          style={{width: 25, height: 25}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ProblemBtn;
