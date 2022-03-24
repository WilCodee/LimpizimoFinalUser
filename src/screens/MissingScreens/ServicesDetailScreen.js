import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import Images from '../../assets/images';
import InternalContainer from '../../containers/InternalContainer';

const ServicesDetailScreen = ({navigation}) => {
  return (
    <ScrollView>
      <InternalContainer
        title="Revisa el detalle de cada servicio"
        subtitle="Conoce las características de cada servicio"
        specialIcon={Images.service}
        navigation={navigation}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextApp.Default fontSize={20} fontWeight="bold" value="Casas" />
          <Image
            source={Images.house}
            style={{width: 80, height: 60}}
            resizeMode="contain"
          />

          <TextApp.Default
            fontSize={12}
            value="Catalogamos los tamaños según los espacios de cada casa, y en
              función a eso las horas mínimas de servicio para cada tamaño."
            color="black"
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={Images.type1}
              style={{width: 90, height: 100}}
              resizeMode="contain"
            />

            <TextApp.Default
              fontWeight="bold"
              fontSize={16}
              value="Pequeña"
              color={colors.primaryColor}
            />

            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: 'white',
                paddingVertical: 3,
                paddingHorizontal: 15,
                borderRadius: 30,
              }}>
              Minimo{' '}
              <TextApp.Default
                fontWeight="bold"
                fontSize={14}
                value="2hrs"
                color="white"
              />
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={Images.type1}
              style={{width: 90, height: 100}}
              resizeMode="contain"
            />

            <TextApp.Default
              fontWeight="bold"
              fontSize={16}
              value="Mediana"
              color={colors.primaryColor}
            />

            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: 'white',
                paddingVertical: 3,
                paddingHorizontal: 15,
                borderRadius: 30,
              }}>
              Minimo{' '}
              <TextApp.Default
                fontWeight="bold"
                fontSize={14}
                value="2hrs"
                color="white"
              />
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={Images.type1}
              style={{width: 90, height: 100}}
              resizeMode="contain"
            />

            <TextApp.Default
              fontWeight="bold"
              fontSize={16}
              value="Grande"
              color={colors.primaryColor}
            />

            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: 'white',
                paddingVertical: 3,
                paddingHorizontal: 15,
                borderRadius: 30,
              }}>
              Minimo{' '}
              <TextApp.Default
                fontWeight="bold"
                fontSize={14}
                value="2hrs"
                color="white"
              />
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TextApp.Default
            fontSize={24}
            fontWeight="bold"
            value="Tipos de Limpeza"
            // color={colors.secondaryColor}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('NormalClean')}
            style={{
              backgroundColor: colors.primaryColor,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80%',
              borderRadius: 40,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={Images.animatedBroom}
                style={{width: 60, height: 40}}
                resizeMode="contain"
              />
              <TextApp.Default
                fontSize={20}
                fontWeight="bold"
                value="Limpieza Normal"
                color={colors.mainColorLight}
              />
            </View>
            <Image
              source={Images.whiteRightArrowV2}
              style={{width: 15, height: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeepClean')}
            style={{
              backgroundColor: colors.primaryColor,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80%',
              borderRadius: 40,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={Images.deepCleaning}
                style={{width: 60, height: 40}}
                resizeMode="contain"
              />
              <TextApp.Default
                fontSize={20}
                fontWeight="bold"
                value="Limpieza Profunda"
                color={colors.mainColorLight}
              />
            </View>
            <Image
              source={Images.whiteRightArrowV2}
              style={{width: 15, height: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 30,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <View style={{flex: 1, alignItems: 'center', marginBottom: 30}}>
              <TextApp.Default
                fontSize={24}
                value="Oficina"
                // color={colors.secondaryColor}
              />
              <Text style={{fontSize: 12, textAlign: 'center'}}>
                Estimamos un tiempo mínimo en el que la colaboradora debe
                realizar sus tareas en una oficina.
              </Text>
            </View>
            <Image
              source={Images.office}
              style={{width: 80, height: 60, marginBottom: 5}}
              resizeMode="contain"
            />

            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: 'white',
                paddingVertical: 3,
                paddingHorizontal: 15,
                borderRadius: 30,
              }}>
              Minimo{' '}
              <TextApp.Default
                fontWeight="bold"
                fontSize={14}
                value="2hrs"
                color="white"
              />
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, alignItems: 'center', marginBottom: 30}}>
              <TextApp.Default fontSize={24} value="Otro" />
              <Text style={{fontSize: 12, textAlign: 'center'}}>
                Estimamos un tiempo mínimo que la colaboradora debe realizar sus
                tareas en otro espacio a contratar, como áreas sociales, eventos
                etc.
              </Text>
            </View>
            <Image
              source={Images.otherPlace}
              style={{width: 80, height: 60, marginBottom: 5}}
              resizeMode="contain"
            />

            <Text
              style={{
                backgroundColor: colors.secondaryColor,
                color: 'white',
                paddingVertical: 3,
                paddingHorizontal: 15,
                borderRadius: 30,
              }}>
              Minimo{' '}
              <TextApp.Default
                fontWeight="bold"
                fontSize={14}
                value="2hrs"
                color="white"
              />
            </Text>
          </View>
        </View>
      </InternalContainer>
    </ScrollView>
  );
};

export default ServicesDetailScreen;
