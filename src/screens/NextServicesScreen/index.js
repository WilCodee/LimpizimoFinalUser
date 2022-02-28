import React, {useState, useEffect, useContext} from 'react';
import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';
import {HStack, VStack} from 'native-base';
import Images from '../../assets/images';
import SelectApp from '../../components/SelectApp';
import ServicesList from './components/ServicesList';
import ButtonApp from '../../components/ButtonApp';
import DatePickerApp from '../../components/DatePickerApp';
import {getData} from '../../utils/fetch/getData';
import {AuthContext} from '../../context/AuthContext';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import Greeting from '../../components/Greeting';
import {Controller, useForm} from 'react-hook-form';

const NextServicesScreen = ({navigation}) => {
  const { control, handleSubmit, formState } = useForm();
  const {logout, user} = useContext(AuthContext);
  const [services, setServices] = useState([]);

  const initialRequest = async () => {
    const currentUserId = user._id['$oid'];
    const servicesRequest = await getData(
      `services/getAllServicesByClientId/${currentUserId}`,
    );
    if ('error' in servicesRequest) {
      console.info('Error!!!', servicesRequest.error);
      return;
    }

    if (servicesRequest.OK) {
      setServices(servicesRequest.data);
    }
  };

  useEffect(() => {
    console.log('USER', user);
    initialRequest();
  }, []);

  return (
    <>
      <ScrollView>
        <Greeting value={'Hola ' + user.name} />
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 16,
            }}>
            <TextApp.Default
              value="Tus próximos servicios"
              fontWeight="bold"
              fontSize={18}
            />
          </View>

          <View style={{margin: 16}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextApp.Default value="Mis servicios" />
              <Image
                source={Images.service1}
                style={{width: 20, height: 40}}
                resizeMode="contain"
              />
              <View style={{position: 'absolute', right: 4, width: "30%"}}>
                <Controller
                  control={control}
                  rules={{required: false}}
                  render={({field: {onChange, onBlur, value}}) => (
                    <DatePickerApp.Default
                      //colorScreen={colorScreen}
                      //label={label}
                      value={value}
                      onChange={(selected) => onChange(selected)}
                      //iconCollection={iconCollection}
                      //iconName={iconName}
                    />
                    
                  )}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                marginVertical: 12,
                borderRadius: 25,
                paddingVertical: 8,
                paddingHorizontal: 8,
              }}>
              {services.length > 0 && <ServicesList navigation={navigation} />}
              {services.length === 0 && (
                <>
                  <VStack alignItems="center">
                    <TextApp.Default value="Actualmente no tienes servicios" />
                  </VStack>
                  <ButtonApp.Default
                    title="Nuevo Servicio"
                    onPress={() => navigation.navigate('NewService')}
                    marginTop={16}
                  />
                </>
              )}
            </View>

            <VStack alignItems="center">
              <TextApp.Default
                fontSize={20}
                fontWeight="bold"
                value="¿Qué incluye los servicios?"
                color={colors.secondaryColor}
              />
              <TextApp.Default value="Descubre los detalles de los servicios que las colaboradoras harán en tu hogar u oficina" />
            </VStack>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.greenNormalCleaning}
                  style={{width: 150, height: 90}}
                  resizeMode="contain"
                />
                <TextApp.Default value="LIMPIEZA" fontWeight="bold" />
                <TextApp.Default value="NORMAL" fontWeight="bold" />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.greenNormalCleaning}
                  style={{width: 150, height: 90}}
                  resizeMode="contain"
                />
                <TextApp.Default value="LIMPIEZA" fontWeight="bold" />
                <TextApp.Default value="PROFUNDA" fontWeight="bold" />
              </View>
            </View>

            <View
              style={{
                ...styles.cuponContainer,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 25,
              }}>
              <TextApp.Default
                value="CUPÓN: LIMPIA 2022"
                fontWeight="bold"
                fontSize={20}
                color="white"
              />
              <TextApp.Default
                value="20% DE DESCUENTO"
                fontWeight="bold"
                fontSize={24}
                color="white"
              />
              <TextApp.Default
                value="En tu siguiente servicio"
                fontWeight="bold"
                fontSize={16}
                fontStyle="italic"
                color="white"
              />
            </View>

            <View style={{marginTop: 12}}>
              <TextApp.Default
                color={colors.secondaryColor}
                fontWeight="bold"
                fontSize={18}
                value="Invitar amigos"
                textAlign="center"
              />
              <Text style={{textAlign: 'center', color: 'gray'}}>
                Invita al mejor servicio de limpieza y obtén beneficios
              </Text>
            </View>

            <View
              style={{
                ...styles.cuponDetails,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Images.trust3}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  LIMPIASEGURO
                </Text>
              </View>

              <Text style={{textAlign: 'center', color: 'white', fontSize: 12}}>
                Cuando tus amigos, ingresen el código, obtendrán $5.00 en su
                primer servicio, y te daremos el mismo valor en tu próximo
                servicio en tu cuenta.
              </Text>
            </View>

            <ButtonApp.Default
              title="Invitar amigos"
              onPress={logout}
              marginTop={16}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default NextServicesScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginVertical: 12,
  },
  title: {
    color: '$primaryColor',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greenText: {
    color: '$secondaryColor',
  },
  purpleText: {
    color: '$primaryColor',
  },

  cuponContainer: {
    backgroundColor: colors.primaryColor,
    color: 'white',
    padding: 12,
  },

  cuponDetails: {
    backgroundColor: colors.secondaryColor,
    color: 'white',
    padding: 12,
  },
  greeting: {
    color: '$mainColorLight',
    backgroundColor: '$secondaryColor',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  serviceQuestion: {
    color: '$mainColorLight',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  cleaningType: {
    color: '$mainColorLight',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  cleaningOptionsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 180,
  },
  cleaningOption: {
    alignItems: 'center',
  },
  cleaningImageContainer: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
    borderColor: '$mainColorLight',
    borderWidth: 3,
    transform: [{perspective: 1000}],
  },
  cleaningImage: {
    height: 36,
    width: 36,
  },
  cleaningMainText: {
    color: '$mainColorLight',
    fontSize: 8,
    marginTop: 8,
  },
  cleaningDeepText: {
    color: '$mainColorLight',
    fontSize: 8,
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1,
    height: 740,
    justifyContent: 'center',
  },
  frequency: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 16,
    height: 50,
    padding: 3,
    backgroundColor: '$primaryColor',
    borderWidth: 3,
    borderColor: '$mainColorLight',
    borderRadius: 25,
    zIndex: 2,
  },
  optionContainer: {
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  frequencyText: {
    color: '$mainColorLight',
    fontSize: 10,
    textAlign: 'center',
  },
  frequencyInfoContainer: {
    marginTop: -25,
    marginHorizontal: 20,
    backgroundColor: '$mainColorLight',
    borderRadius: 30,
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 30,
    zIndex: 1,
  },
  frequencyOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frequencyOptionText: {
    fontSize: 10,
    color: '$greyText',
    fontWeight: 'bold',
  },
  recurrencePickerContainer: {
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: '$primaryColor',
    height: 22,
    width: 125,
    borderRadius: 13,
  },
  recurrencePicker: {
    height: '100%',
    marginLeft: -40,
    marginRight: -50,
    marginTop: -1,
    transform: [{scale: 0.6}],
  },
  dateTimePickerTouchableArea: {
    marginLeft: 'auto',
    width: 125,
    alignItems: 'center',
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimePickerImage: {
    height: 20,
    width: 20,
  },
  dateTimePickerText: {
    marginLeft: 8,
    color: '$greyText',
    fontSize: 10,
  },
  placeQuestion: {
    marginTop: 8,
    fontSize: 10,
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  placeOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$primaryColor',
    padding: 3,
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: 9,
  },
  placeOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOptionImage: {
    height: 21,
    width: 21,
  },
  placePickerInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  placePicker: {
    height: 24,
    marginHorizontal: -28,
    marginTop: -4,
    color: '$mainColorLight',
    transform: [{scale: 0.8}],
  },
  placeAddress: {
    color: '$mainColorLight',
    fontSize: 10,
  },
  serviceHours: {
    marginTop: 8,
    fontSize: 10,
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  serviceHoursOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$secondaryColor',
    padding: 2,
    marginHorizontal: 50,
    borderRadius: 15,
    marginTop: 6,
  },
  serviceHoursOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 14,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceHoursOptionImage: {
    height: 15,
    width: 15,
  },
  serviceHoursPickerContainer: {
    marginLeft: 4,
    flex: 1,
  },
  serviceHoursPicker: {
    height: 21,
    color: '$mainColorLight',
    marginTop: -2,
    marginRight: -20,
    transform: [{scale: 0.8}],
  },
  cardOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  cardOptionImage: {
    height: 18,
    width: 18,
  },
  cardPickerContainer: {
    height: 26,
    width: 190,
  },
  cardPicker: {
    height: 27,
    transform: [{scale: 0.85}],
    color: '$greyTextLight',
    marginLeft: -20,
    marginRight: -45,
    marginTop: -2,
  },
  scrollArrow: {
    zIndex: 2,
    position: 'absolute',
    right: 20,
  },
  scrollArrowImage: {
    tintColor: '$primaryColor',
    width: 40,
    height: 25,
  },
  askForButton: {
    top: 290,
    height: 140,
    width: 140,
    backgroundColor: '$primaryColor',

    alignSelf: 'center',
    marginBottom: 300,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForButtonPartsContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  askForButtonTopPart: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForText: {
    color: '$mainColorLight',
    fontSize: 10,
  },
  now: {
    color: '$mainColorLight',
    fontSize: '$big',
    fontWeight: 'bold',
    lineHeight: '$big',
  },
  askForButtonBottomPart: {
    height: '50%',
    backgroundColor: '$secondaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatedPrice: {
    color: '$mainColorLight',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: '$huge',
  },
  popupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  popupImgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  popupTouchable: {
    width: '100%',
  },
  popupTextContainer: {
    paddingVertical: 20,
  },
  popupImg: {
    width: 130,
    height: 200,
  },
  messagePopupText: {
    fontSize: 10,
    textAlign: 'center',
  },
  okPopupText: {
    color: '$secondaryColor',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
  },
  lineSeparator: {
    height: 1,
    width: '112%',
    backgroundColor: '$mainColorDark',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,

    overflow: 'hidden',
    position: 'absolute',
    top: 45,
    right: 0,
  },
  map: {
    flex: 1,
  },
});
