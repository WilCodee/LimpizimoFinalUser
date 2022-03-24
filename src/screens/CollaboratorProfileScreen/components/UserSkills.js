import {View, Image} from 'react-native';
import React from 'react';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const UserSkills = ({image, value}) => {
  return (
    <View style={{alignItems: 'center', marginRight: 15}}>
      <Image
        source={image}
        style={{
          width: 55,
          height: 55,
          borderColor: colors.primaryColor,
          borderRadius: 55,
        }}
      />

      <TextApp.Default fontWeight="bold" value={value} />
    </View>
  );
};

export default UserSkills;
