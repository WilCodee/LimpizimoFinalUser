import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import InternalContainer from '../../containers/InternalContainer';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import Images from '../../assets/images';
import UserInformation from './components/UserInformation';
import UserSkills from './components/UserSkills';
import UserQualities from './components/UserQualities';

const CollaboratorProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <InternalContainer
        collaboratorProfile={{
          isVerified: true,
          imageUrl: 'https://i.ibb.co/V9GYV8r/Recurso-1.png',
          size: 100,
          fullRounded: true,
          borderThickness: 3,
          outlineColor: colors.secondaryColor,
        }}
        title="Roberta Sanchez"
        subtitle="CI: 14xxxxxxx01"
        navigation={navigation}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 10,
              borderBottomWidth: 1,
              marginBottom: 20,
            }}>
            <View>
              <TextApp.Default value="250" fontSize={20} fontWeight="bold" />
              <TextApp.Default value="servicios" color={colors.mainColorDark} />
            </View>
            <View>
              <TextApp.Default
                value="(4.89 X)"
                fontSize={20}
                fontWeight="bold"
              />
              <TextApp.Default
                value="Calificación"
                color={colors.mainColorDark}
              />
            </View>
            <View>
              <TextApp.Default value="3" fontSize={20} fontWeight="bold" />
              <TextApp.Default value="Meses" color={colors.mainColorDark} />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '85%',
                marginBottom: 50,
              }}>
              <View
                style={{
                  marginBottom: 50,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <UserQualities image={Images.trust} value="Confianza" />
                <UserQualities image={Images.security} value="Confianza" />
                <UserQualities
                  image={Images.excelentservice}
                  value="Excelente Servicio"
                />
              </View>
              <View style={{marginBottom: 50}}>
                <UserInformation value="Datos verificados" />
                <UserInformation value="Dirección verificada" />
                <UserInformation value="Revisión de antecedentes" />
              </View>
              <View>
                <TextApp.Default
                  value="Habilidades:"
                  fontSize={18}
                  fontWeight="bold"
                />

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <UserSkills value="Limpiar" image={Images.clean} />
                  <UserSkills value="Planchar" image={Images.iron} />
                  <UserSkills value="Lavar" image={Images.wash} />
                  <UserSkills value="Cocinar" image={Images.cook} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </InternalContainer>
    </ScrollView>
  );
};

export default CollaboratorProfileScreen;
