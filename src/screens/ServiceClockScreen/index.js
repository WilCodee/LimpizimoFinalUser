import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';

import colors from '../../constants/colors';
import Images from '../../assets/images';
import TextApp from '../../components/TextApp';

const ServiceClockScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.primaryColor,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 30,
      }}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <TextApp.Default
          textAlign="center"
          color={colors.mainColorLight}
          fontSize={16}
          value="X"
        />
      </TouchableOpacity>

      <View
        style={{
          // flex: 1,
          justifyContent: 'space-between',
        }}>
        <TextApp.Default
          textAlign="center"
          color={colors.mainColorLight}
          fontSize={22}
          fontWeight="bold"
          value={`Tiempo restante\ndel servicio`}
        />

        <Image
          source={Images.newclock}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ServiceClockScreen;
