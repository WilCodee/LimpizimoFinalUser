import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import ButtonApp from '../../components/ButtonApp';
import ImageUserProfile from '../../components/ImageUserProfile';

const ServiceRewardScreen = () => {
  return (
    <View
      style={{
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryColor,
      }}>
      <TextApp.Default
        fontWeight="bold"
        fontSize={28}
        value={`¿Deseas darle\nuna propina?`}
        color={colors.mainColorLight}
      />
      <View style={{alignItems: 'center', width: '100%'}}>
        <ImageUserProfile
          isVerified={true}
          imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
          size={300}
          fullRounded={true}
          borderThickness={8}
          outlineColor={colors.secondaryColor}
        />

        <Text
          style={{
            color: colors.mainColorLight,
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Roberta Sanchez
        </Text>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.mainColorLight,
              borderColor: colors.secondaryColor,
              borderWidth: 2,
              borderRadius: 80,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextApp.Default fontSize={35} value="$1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.mainColorLight,
              borderColor: colors.secondaryColor,
              borderWidth: 2,
              borderRadius: 80,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextApp.Default fontSize={35} value="$2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.mainColorLight,
              borderColor: colors.secondaryColor,
              borderWidth: 2,
              borderRadius: 80,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextApp.Default fontSize={35} value="$3" />
          </TouchableOpacity>
        </View>
      </View>
      <ButtonApp.Default
        title="Salir"
        backgroundColor={colors.secondaryColor}
        textColor={colors.mainColorLight}
        width="100%"
      />
    </View>
  );
};

export default ServiceRewardScreen;
