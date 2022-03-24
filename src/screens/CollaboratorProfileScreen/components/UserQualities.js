import {Image, View} from 'react-native';
import React from 'react';
import TextApp from '../../../components/TextApp';

const UserQualities = ({value, image}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={image}
        style={{width: 100, height: 100}}
        resizeMode="contain"
      />

      <TextApp.Default value={value} />
    </View>
  );
};

export default UserQualities;
