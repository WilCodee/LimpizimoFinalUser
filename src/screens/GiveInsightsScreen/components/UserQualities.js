import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const UserSkills = ({image, value}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        marginRight: 15,
      }}>
      <View
        style={{
          backgroundColor: colors.mainColorLight,
          borderColor: colors.secondaryColor,
          borderWidth: 3,
          borderRadius: 55,
          padding: 10,
        }}>
        <Image
          source={image}
          style={{
            width: 55,
            height: 55,
          }}
          resizeMode="contain"
        />
      </View>

      <TextApp.Default
        color={colors.mainColorLight}
        fontWeight="bold"
        value={value}
      />
    </TouchableOpacity>
  );
};

export default UserSkills;
