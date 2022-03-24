import {View, Text, Image} from 'react-native';
import React from 'react';
import Images from '../../../assets/images';
import colors from '../../../constants/colors';
import {Icon} from 'react-native-elements';

const UserInformation = ({value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={Images.checkPurple}
        style={{width: 20, height: 20}}
        resizeMode="contain"
      />

      <Text
        style={{
          color: colors.greyText,
          marginHorizontal: 5,
        }}>
        {value}
      </Text>

      <Icon name="help" size={20} color={colors.greyText} />
    </View>
  );
};

export default UserInformation;
