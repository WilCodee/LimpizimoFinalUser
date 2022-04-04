import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import colors from '../../constants/colors';

import InternalContainer from '../../containers/InternalContainer';
import ImageUserProfile from '../../components/ImageUserProfile';
import TextApp from './../../components/TextApp';
import Images from '../../assets/images';
import {Icon} from 'react-native-elements';

const BeginServiceScreen = () => {
  return (
    <ScrollView>
      <InternalContainer
        containerColor={colors.containerSecondaryColor}
        childrenContainerColor={colors.primaryColor}
        title="Hola Ricardo!"
        titleFontSize={35}
        titleFontWeight="bold"
        subtitle="El servicio está por empezar"
        subtitleFontSize={30}
        subTitleFontWeight="bold"
        subSubTitle="La Colaboradora asignada es:"
        subSubTitleFontSize={11}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: colors.mainColorLight,
          }}>
          <View style={{alignItems: 'center'}}>
            <ImageUserProfile
              isVerified={true}
              imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
              size={100}
              fullRounded={true}
              borderThickness={4}
              outlineColor={colors.secondaryColor}
            />
            <Text style={{color: colors.mainColorLight, marginTop: 5}}>
              (4.89 X)
            </Text>
          </View>
          <View>
            <TextApp.Default
              color={colors.mainColorLight}
              fontSize={18}
              fontWeight="bold"
              value="Roberta Sanchez"
            />
            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: colors.mainColorLight,
                borderRadius: 20,
                width: 140,
                fontSize: 12,
                textAlign: 'center',
                marginBottom: 8,
              }}>
              55 sercios realizados
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="room" color="white" size={30} />
              <View>
                <TextApp.Default
                  color={colors.mainColorLight}
                  value="Avenida Catalina Aldaz y Portugal"
                />
                <Text
                  style={{
                    backgroundColor: colors.secondaryColor,
                    color: colors.mainColorLight,
                    borderRadius: 20,
                    width: 60,
                    fontSize: 12,
                    textAlign: 'center',
                    marginTop: 2,
                    marginBottom: 12,
                  }}>
                  Trabajo
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: colors.mainColorLight,
                    marginRight: 5,
                    padding: 8,
                  }}>
                  <Image
                    source={Images.phone}
                    style={{width: 15, height: 15}}
                    resizeMode="contain"
                  />
                </View>
                <TextApp.Default color={colors.mainColorLight} value="Llamar" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: colors.mainColorLight,
                    marginRight: 5,
                    padding: 8,
                  }}>
                  <Image
                    source={Images.msg}
                    style={{width: 15, height: 15}}
                    resizeMode="contain"
                  />
                </View>
                <TextApp.Default color={colors.mainColorLight} value="Chater" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <TextApp.Default
            color={colors.mainColorLight}
            fontSize={18}
            fontWeight="bold"
            value="Información del servicio"
          />

          <View style={{alignItems: 'center', marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="event" color="white" size={30} />
              <TextApp.Default
                otherStyle={{
                  marginLeft: 5,
                }}
                value="Lunes 3 ene. 2020"
                fontSize={16}
                color={colors.mainColorLight}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="alarm" color="white" size={30} />
              <TextApp.Default
                otherStyle={{
                  marginLeft: 5,
                }}
                value="8:00am a 12:00pm"
                fontSize={16}
                color={colors.mainColorLight}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={Images.service}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
              <TextApp.Default
                otherStyle={{
                  marginLeft: 5,
                }}
                value="Servicio Única vez"
                fontSize={16}
                color={colors.mainColorLight}
              />
            </View>

            <View style={{alignItems: 'center', marginVertical: 20}}>
              <View
                style={{
                  backgroundColor: colors.secondaryColor,
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 40,
                  borderWidth: 4,
                  borderColor: colors.mainColorLight,
                }}>
                <Image
                  source={Images.normalCleaning}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
              </View>

              <TextApp.Default
                color={colors.mainColorLight}
                fontWeight="bold"
                otherStyle={{
                  marginTop: 5,
                }}
                value="LIMPIEZA NORMAL"
              />
              <TextApp.Default
                color={colors.mainColorLight}
                fontWeight="bold"
                value="Indicaciones"
              />

              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  borderColor: colors.mainColorLight,
                  color: colors.mainColorLight,
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                }}>
                La ubicación tiene como referencia arriba de la embajada
                americana, no timbrar más de una vez. Muchas gracias
              </Text>

              <TextApp.Default
                textAlign="center"
                fontSize={20}
                fontWeight="bold"
                value={`DESLIZA PARA\nEMPEZAR EL SERVICIO`}
                color={colors.mainColorLight}
                otherStyle={{
                  marginVertical: 20,
                }}
              />
            </View>
          </View>
        </View>
      </InternalContainer>
    </ScrollView>
  );
};

export default BeginServiceScreen;
