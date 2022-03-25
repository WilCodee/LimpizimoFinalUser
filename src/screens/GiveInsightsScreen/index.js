import {View} from 'react-native';
import React from 'react';
import colors from './../../constants/colors';
import TextApp from './../../components/TextApp';
import ButtonApp from './../../components/ButtonApp';
import ImageUserProfile from '../../components/ImageUserProfile';
import Images from './../../assets/images/index';

import UserQualities from './components/UserQualities';

const GiveInsightsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        backgroundColor: colors.primaryColor,
      }}>
      <TextApp.Default
        fontWeight="bold"
        fontSize={38}
        textAlign="center"
        color={colors.mainColorLight}
        value="¿Deseas darle una insignia a?"
      />

      <ImageUserProfile
        isVerified={true}
        imageUrl={'https://i.ibb.co/V9GYV8r/Recurso-1.png'}
        size={200}
        fullRounded={true}
        borderThickness={8}
        outlineColor={colors.secondaryColor}
      />

      <TextApp.Default
        fontWeight="bold"
        fontSize={30}
        color={colors.mainColorLight}
        value="Roberta Sanchez"
      />

      <View style={{flexDirection: 'row'}}>
        <UserQualities image={Images.trust2} value="Confianza" />
        <UserQualities image={Images.security2} value="Seguridad" />
        <UserQualities
          image={Images.excelentservice2}
          value="Excelente Servicio"
        />
      </View>

      <View style={{width: '70%'}}>
        <ButtonApp.Default
          title="Salir"
          backgroundColor={colors.secondaryColor}
        />
      </View>
    </View>
  );
};

export default GiveInsightsScreen;
