import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assets/images';
import TextApp from '../../components/TextApp';
import ButtonApp from '../../components/ButtonApp';
import colors from '../../constants/colors';
import InternalContainer from '../../containers/InternalContainer';
import ImageUserProfile from '../../components/ImageUserProfile';

import ModalDialog from './components/ModalDialog';

const HourBtn = ({handleModal, hours}) => {
  return (
    <TouchableOpacity
      onPress={handleModal}
      style={{
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.primaryColor,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 150,
        paddingHorizontal: 8,
        marginTop: 5,
      }}>
      <Image
        source={Images.clock}
        style={{width: 15, height: 15}}
        resizeMode="contain"
      />
      <TextApp.Default fontWeight="bold" value={`+${hours} horas`} />
      <Image
        source={Images.alertIcon}
        style={{width: 15, height: 15}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const dataService = [
  {
    service: 'Valor base por horas',
    price: 7,
    times: 5,
    total: 35,
  },
  {
    service: 'Tasa del servicio y seguridad',
    total: 35,
  },
  {
    service: 'Fin de semana',
    total: 35,
  },
];

const ServiceDetailScreen = ({navigation}) => {
  const [modalSelectedHours, setModalSelectedHours] = useState(false);
  const [modalExtraHours, setModalExtraHours] = useState(false);
  return (
    <ScrollView>
      <ModalDialog
        visible={modalSelectedHours}
        closeModal={setModalSelectedHours}
        title="Horas seleccionadas"
        message="Son las horas que el usuario selecciona al momento de realizar el
              pedido, estás horas están predeterminadas en función al espacio de
              su casa, oficina u otro lugar seleccionado."
      />
      <ModalDialog
        visible={modalExtraHours}
        closeModal={setModalExtraHours}
        title="Horas extras"
        message="Son las horas que el usuario solicita adicionales para poder terminar los labores en su casa, oficina u otro lugar seleccionado.
        Estas horas son previamente indicadas por la colaboradora y
        aceptadas por el usuario"
      />
      <InternalContainer
        title="Detalles del servicio"
        subtitle="Revisa el detalle del servicio realizado"
        navigation={navigation}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'blue',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <TextApp.Default
            color={colors.mainColorDark}
            fontSize={14}
            value="1/12/20 8:00am a 11am"
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ImageUserProfile
                isVerified={false}
                imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
                size={64}
                fullRounded={true}
                borderThickness={2}
                outlineColor={colors.secondaryColor}
              />
              <View>
                <TextApp.Default
                  color={colors.greyText}
                  value="Roberta Sanchez"
                  fontSize={14}
                  fontWeight="bold"
                />

                <Text
                  style={{
                    fontSize: 12,
                    borderColor: colors.textInputColor,
                    borderWidth: 1,
                    borderRadius: 25,
                    width: 90,
                    textAlign: 'center',
                  }}>
                  ID: 14xxxxxx04
                </Text>
              </View>
            </View>

            <View>
              <TextApp.Default
                color={colors.greyText}
                value="U$D 28.00"
                fontSize={18}
                fontWeight="bold"
              />
              <View
                style={{
                  width: 80,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>X</Text>
                <Text>X</Text>
                <Text>X</Text>
                <Text>X</Text>
                <Text>X</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginBottom: 20}}>
          <TextApp.Default
            value="El servicio fue realizado en la siguiente dirección"
            color={colors.greyText}
          />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 30,
              borderColor: colors.primaryColor,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 60,
              marginTop: 10,
            }}>
            <Image
              source={Images.office}
              style={{
                width: 50,
                height: 30,
                // backgroundColor: colors.primaryColor,
              }}
              resizeMode="contain"
            />
            <View>
              <TextApp.Default
                value="Trabajo"
                color={colors.primaryColor}
                fontSize={17}
                fontWeight="bold"
              />
              <TextApp.Default value="Catalina Aldaz, Quito" fontSize={14} />
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 30,
              borderColor: colors.primaryColor,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 30,
              marginTop: 10,
            }}>
            <TextApp.Default
              value="Servicio"
              color={colors.primaryColor}
              fontSize={17}
            />
            <TextApp.Default
              fontWeight="bold"
              value=" Única vez"
              fontSize={14}
            />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginBottom: 20}}>
          <TextApp.Default
            color={colors.greyText}
            value="El servicio que elegiste fue:"
          />
          <Image
            source={Images.clock}
            style={{width: 80, height: 60, marginVertical: 15}}
            resizeMode="contain"
          />
          <TextApp.Default
            value="LIMPIEZA NORMAL"
            fontWeight="bold"
            fontSize={14}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TextApp.Default
            color={colors.greyText}
            value="Horas seleccionadas"
          />
          <HourBtn hours={4} handleModal={() => setModalSelectedHours(true)} />
          <TextApp.Default color={colors.greyText} value="Horas extras" />
          <HourBtn hours={1} handleModal={() => setModalExtraHours(true)} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginBottom: 70,
          }}>
          <View
            style={{
              width: '95%',
              flex: 1,
              // alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.greyText,
                borderBottomWidth: 1,
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              Valor del servicio
            </Text>

            <View>
              {dataService.map((s, i) => (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{s.service}</Text>
                  <Text>{s.price || ' '}</Text>
                  <Text>{s.times || ' '}</Text>
                  <Text>{s.total}</Text>
                </View>
              ))}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.greyText,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Valor total
                </Text>
                <Text
                  style={{
                    color: colors.greyText,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  U$D 34.00
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
          }}>
          <ButtonApp.Secondary
            title="Reportar un problema"
            textColor={colors.primaryColor}
            height={35}
            fontSize={20}
            width="60%"
          />
        </View>
      </InternalContainer>
    </ScrollView>
  );
};

export default ServiceDetailScreen;
