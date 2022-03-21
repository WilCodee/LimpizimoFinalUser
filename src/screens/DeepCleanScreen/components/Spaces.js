import {View, Text, Image} from 'react-native';
import React from 'react';

import Images from '../../../assets/images';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const Spaces = ({arr, image, space, num}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginBottom: 30,
      }}>
      <View style={{flex: 1, alignItems: 'center', marginBottom: 5}}>
        <Image
          source={image}
          style={{width: 70, height: 80}}
          resizeMode="contain"
        />

        <TextApp.Default
          fontSize={20}
          fontWeight="bold"
          value={space}
          color={colors.primaryColor}
        />
      </View>
      {arr.map((item, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={i + 1 <= num ? Images.checkPurple : Images.checkGreen}
            style={{width: 50, height: 20}}
            resizeMode="contain"
          />
          <TextApp.Default
            fontSize={14}
            value={item}
            color={colors.greyTextLight}
          />
        </View>
      ))}
    </View>
  );
};

export default Spaces;
