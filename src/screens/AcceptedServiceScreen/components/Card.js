import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../../assets/images';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const Card = ({title, subtitle, icon, backgroundColor}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 25,
        width: 320,
        marginHorizontal: 5,
        flex: 1,
        flexDirection: 'column',
      }}>
      <TextApp.Default
        value={title}
        color={colors.mainColorLight}
        fontSize={20}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{width: '80%', color: colors.mainColorLight}}>
          {subtitle}
        </Text>
        <Image
          source={icon}
          style={{width: 50, height: 50}}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TextApp.Default
          value="ver perfil"
          color={colors.mainColorLight}
          fontSize={16}
        />
        <Image
          source={Images.whiteRightArrowV2}
          style={{width: 15, height: 10}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
