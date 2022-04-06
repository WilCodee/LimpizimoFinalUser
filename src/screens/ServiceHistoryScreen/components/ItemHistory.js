import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import ImageUserProfile from './../../../components/ImageUserProfile';
import TextApp from '../../../components/TextApp';
import Images from '../../../assets/images';

const ItemHistory = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primaryColor,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <ImageUserProfile
          isVerified={false}
          imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
          size={50}
          fullRounded={true}
          borderThickness={2}
          outlineColor={colors.secondaryColor}
        />

        <View style={{marginLeft: 5}}>
          <TextApp.Default
            value="Roberta Sanchez"
            color={colors.mainColorLight}
            fontSize={12}
          />
          <TextApp.Default
            value="1/13/20 8am a 11am"
            color={colors.mainColorLight}
            fontSize={12}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Images.limp1}
              style={{width: 15, height: 13}}
              resizeMode="contain"
            />
            <TextApp.Default
              value="100 Limpipuntos"
              color={colors.mainColorLight}
              fontSize={12}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <TextApp.Default
            value="U$D 28.00"
            color={colors.mainColorLight}
            fontSize={16}
          />
          <TextApp.Default
            value="X X X X X"
            color={colors.mainColorLight}
            fontSize={16}
          />
        </View>
        <Image
          source={Images.whiteRightArrowV2}
          style={{width: 25, height: 25, marginLeft: 5}}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemHistory;
