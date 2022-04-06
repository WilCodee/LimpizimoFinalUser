import {Image, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import ItemHistory from './components/ItemHistory';
import Images from '../../assets/images';

const History = () => {
  return (
    <View>
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextApp.Default
          fontSize={16}
          value="Mis servicios"
          color={colors.mainColorDark}
        />
        <View
          style={{
            backgroundColor: colors.greyText,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}>
          <TextApp.Default
            fontSize={16}
            value="Anteriores"
            color={colors.mainColorLight}
          />
          <Image
            source={Images.whiteDownArrowV2}
            style={{width: 10, height: 10, marginLeft: 10}}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView>
        <ItemHistory />
      </ScrollView>
    </View>
  );
};

export default History;
