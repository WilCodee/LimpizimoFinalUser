import {View, Text} from 'react-native';
import React from 'react';

import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import ButtonApp from '../../components/ButtonApp';
import ImageUserProfile from '../../components/ImageUserProfile';

const ServiceStarsScreen = () => {
  return (
    <View
      style={{
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextApp.Default
        fontSize={24}
        fontWeight="bold"
        color={colors.mainColorLight}
        value={`¿Cómo estuvo\nel servicio de?`}
      />

      <View>
        <ImageUserProfile
          isVerified={true}
          imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
          size={300}
          fullRounded={true}
          borderThickness={8}
          outlineColor={colors.secondaryColor}
        />

        <TextApp.Default
          fontSize={26}
          textAlign="center"
          fontWeight="bold"
          color={colors.mainColorLight}
          value={`Roberta Sanchez\nX X X X X`}
        />
      </View>

      <ButtonApp.Default
        title="salir"
        fontWeight="bold"
        backgroundColor={colors.secondaryColor}
        borderWidth={0}
        width="100%"
      />
    </View>
  );
};

export default ServiceStarsScreen;
