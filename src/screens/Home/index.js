import React, { useEffect, useState, useRef, useLayoutEffect, useContext } from 'react';
import { Animated, Image, Platform, ScrollView, StatusBar, Text, View, ImageBackground } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { getPlaces } from '../../store/actions/places';
import { askForService, getServiceCostList } from '../../store/actions/services';
import { setRequestedService } from '../../store/actions/services';
import { connectToRoom, listenMessage } from '../../store/actions/webSockets';
import { strings } from '../../i18n';
import Images from '../../assets/images';
import styles from './styles';
import ModalMenu from './components/modal'
import { setCleanType, setServiceBeginAt, setServiceDay, setServiceHours, setServiceType } from '../../store/actions/service';
import { ContextAskService } from '../../context/AskServiceContext';
import {Picker} from '@react-native-picker/picker';
import DatePickerApp from '../../components/DatePickerApp';
import ButtonApp from'../../components/ButtonApp'; 

const Home = ({ props, navigation }) => {

  const authInfo = useSelector(state => state.auth)
  const serviceInfo = useSelector(state => state.service)

  const { service, setServiceDay, setServiceBeginAt } = useContext( ContextAskService)
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const [toggleValue, setToggleValue] = useState(false);
  const [index, setIndex] = useState(0);
  const [isNormalCleaningOptionSelected, setIsNormalCleaningOptionSelected] = useState(false);
  const [isDeepCleaningOptionSelected, setIsDeepCleaningOptionSelected] = useState(false);
  const [isOnceOptionSelected, setIsOnceOptionSelected] = useState(true);
  const [isFrequentOptionSelected, setIsFrequentOptionSelected] = useState(false);
  const [recurrenceOption, setRecurrenceOption] = useState(1);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(DateTime.local());
  const [serviceTypeDay, setServiceTypeDay] = useState('todayService');
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [time, setTime] = useState(DateTime.local());
  const [dialogVisible, setDialogVisible] = useState(false);
  // const places = useSelector(state => state.places.places);
  const serviceCostList = useSelector(state => state.services.serviceCostList);



  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const dispatch = useDispatch();
  const availableHours = useSelector(state =>
    serviceCostList
      ? state.services.serviceCostList.map(service => {
        return parseInt(service.hours);
      })
      : [2, 4, 6, 8],
  );
  const [selectedHour, setSelectedHour] = useState();
  /*const places =
    [
      {
        city: 'Resistencia',
        calleSecundaria: 'Av Sarmiento',
        sizePlace: 1,
        tipoDomicilio: 'Normal',
        id: 1,
        selectedPlaceId: 1
      }
    ]
  */
  const [places, setPlaces] = useState([])

  const availableCards = [
    {
      id: 1,
      name: 'Visa',
      owner: 'John Doe',
      number: '4111111111111111',
      expirationDate: '12/2020',
      cvv: 123,
    },
    {
      id: 2,
      name: 'Diners',
      owner: 'Lilian Potter',
      number: '1234567899859848',
      expirationDate: '12/2021',
      cvv: 456,
    },
  ];
  const [scrollArrowPosition] = useState(new Animated.Value(20));
  const [selectedCardId, setSelectedCardId] = useState(availableCards[0].id);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  /*const [service, setService] = useState({
    frequency: strings('common.service.once'),
    date: date.toFormat('EEEE d MMM. yyyy'),
    time: `${time.toFormat('h:mma')} a ${time.plus({ hours: selectedHour }).toFormat('h:mma')}`,
    selectedCard: availableCards[0],
    calculatedPrice,

  });*/

  const runAnimation = () => {
    scrollArrowPosition.setValue(20);
    Animated.timing(scrollArrowPosition, {
      toValue: 40,
      duration: 500,
    }).start(() => runAnimation());
  };

  useEffect(() => {
    runAnimation();
    setPlaces(authInfo.user.addresses)
  }, []);

  useEffect(() => {
    console.info('places', places)
    if (places.length > 0) {
      setSelectedPlaceId(places[0]._id['$oid']);
      //setService({ ...service, selectedPlace: places.find(place => place.id === places[0].id) });
    }
  }, [places.length]);
  

  useEffect(() => {
    serviceCostList && setSelectedHour(parseInt(serviceCostList?.[0].hours));
    serviceCostList && _setCalculatedPrice(serviceTypeDay, parseInt(serviceCostList?.[0].hours));
  }, [serviceCostList]);

  useEffect(() => {
    selectedPlaceId &&
      dispatch(getServiceCostList(isNormalCleaningOptionSelected ? 'normal' : 'deep', places.find(place => place._id['$oid'] === selectedPlaceId).sizePlace));
  }, [selectedPlaceId]);

  useEffect(() => {
    service && dispatch(setRequestedService(service));    
  }, [service]);

  const _renderNormalCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: serviceInfo.cleanType.id === 1 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: serviceInfo.cleanType.id === 1 ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.normalCleaning} resizeMode="contain" />
    </View>
  );

  const _renderDeepCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: serviceInfo.cleanType.id === 2 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: serviceInfo.cleanType.id === 2 ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.deepCleaning} resizeMode="contain" />
    </View>
  );

  const _renderOnceOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: serviceInfo.serviceType.id === 1 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: serviceInfo.serviceType.id === 1 ? '55%' : '45%',
      }}
      onPress={() => _toggleServiceType(1)}>
      <Text style={styles.frequencyText}>{strings('common.service.once')}</Text>
    </Touchable>
  );

  const _renderFrequentOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: serviceInfo.serviceType.id === 2 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: serviceInfo.serviceType.id === 2 ? '55%' : '45%',
      }}
      onPress={() => _toggleServiceType(2)}>
      <Text style={styles.frequencyText}>{strings('common.service.frequent')}</Text>
    </Touchable>
  );

  const _toggleCleanType = option => {
    dispatch(setCleanType(option))
  };

  const _toggleServiceType = option => {
    dispatch(setServiceType(option))
  };

  
  const _setSelectedCard = cardId => {
    setSelectedCardId(cardId);
    //setService({ ...service, selectedCard: availableCards.map(card => card.id === cardId) });
  };

  const _setCalculatedPrice = (serviceDayType, selectedHour) => {
    if (isDeepCleaningOptionSelected || isNormalCleaningOptionSelected) {
      for (let i = 0; i < serviceCostList?.length; i++) {
        if (serviceCostList?.[i].hours === selectedHour.toString()) {
          setCalculatedPrice(serviceCostList[i][serviceDayType]);
          break;
        }
      }
    } else {
      setCalculatedPrice(0);
    }
  };

  const _renderPlaceImage = () => (
    <Image
      style={styles.placeOptionImage}
      source={selectedPlaceId === 0 ? Images.office : selectedPlaceId === 1 ? Images.house : Images.otherPlace}
      resizeMode="contain"
    />
  );

  const _renderPlacesPicker = () => {
    if (places.length > 0 && selectedPlaceId) {

      return (
        <View style={styles.placePickerInfoContainer}>
          <Picker selectedValue={selectedPlaceId} style={styles.placePicker} onValueChange={itemValue => setSelectedPlaceId(itemValue)}>
            {places.map(place => (
              <Picker.Item key={place._id['$oid']} label={place.type} value={place._id['$oid']} />
            ))}
          </Picker>
          <Text style={styles.placeAddress}>{`${places.filter(place => place._id['$oid'] === selectedPlaceId)[0].secondary_street}, ${places.filter(place => place._id['$oid'] === selectedPlaceId)[0].city
            }`}</Text>
        </View>
      );
    }
  };

  const _openPopup = () => {
    setDialogVisible(true);
  };

  const _closePopup = () => {
    setDialogVisible(false);
  };

  const scrollView = useRef(null);
  const [rotate, setRotate] = useState({ transform: [{ rotate: '0deg' }] });
  const [maxOffset, setMaxOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const _scroll = () => {
    if (yOffset === maxOffset) {
      scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
    } else {
      scrollView.current.scrollToEnd();
    }
  };

  const _onScroll = event => {
    event.nativeEvent.contentOffset.y === 0 && setRotate({ transform: [{ rotate: '0deg' }] });
    const currentOffset = +(event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height).toFixed(2);
    currentOffset === maxOffset && setRotate({ transform: [{ rotate: '180deg' }] });
    setYOffset(currentOffset);
  };

  useEffect(() => {
    !isDeepCleaningOptionSelected && !isNormalCleaningOptionSelected && scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
  }, [isDeepCleaningOptionSelected, isNormalCleaningOptionSelected]);

  const _askForService = () => {

    const service = {
      habilidades: '5e5fceeb5fd1d60004a4a57b',
      usuario: '5e5fcfd35fd1d60004a4a5a0',
      estado: 'Pendiente',
      fechaInicio: date.toFormat('yyyy,MM,dd'),
      aux_id_domicilio: '5e5fcfeb5fd1d60004a4a5a2',
      duracion: selectedHour,
      costo: parseFloat(calculatedPrice),
      frecuencia: recurrenceOption,
      tipoFrecuencia: isOnceOptionSelected ? strings('common.service.once') : strings('common.service.frequent'),
      tipoLimpieza: isDeepCleaningOptionSelected
        ? `${strings('common.cleaning.main')} ${strings('common.cleaning.deep')}`
        : `${strings('common.cleaning.main')} ${strings('common.cleaning.normal')}`,
      nombreSala: 'sala1',
      horaInicio: time.toFormat('HH:mm'),
      horaFin: time.plus({ hours: selectedHour }).toFormat('HH:mm'),
    };
    // dispatch(connectToRoom('sala1'));
    // dispatch(connectToRoom('armando'));
    dispatch(listenMessage('servicio-asignado'));
    dispatch(askForService(service));
    props.navigation.navigate({
      routeName: 'ServiceStandby',
      key: 'ServiceStandby',
    });
  };

  let disabled = !service.cleaningOption;

  return (
    <View style={styles.container}>
      <Dialog visible={dialogVisible} onTouchOutside={_closePopup}>
        <DialogContent style={styles.popupContainer}>
          <View style={styles.popupImgContainer}>
            <Image source={Images.cleaningLady} style={styles.popupImg} resizeMode="contain" />
            <Text style={styles.messagePopupText}>{strings('common.selectCleaningType')}</Text>
          </View>
          <View style={styles.lineSeparator} />
          <Touchable style={styles.popupTouchable} onPress={_closePopup}>
            <View style={styles.popupTextContainer}>
              <Text style={styles.okPopupText}>{strings('common.understood').toUpperCase()}</Text>
            </View>
          </Touchable>
        </DialogContent>
      </Dialog>
      <Text style={styles.greeting}>{strings('common.greeting', { name: authInfo.user.name ?? "" })}</Text>


      <ScrollView
        ref={scrollView}
        scrollEnabled={!disabled}
        onContentSizeChange={(_, height) => setMaxOffset(+height.toFixed(2))}
        onScroll={_onScroll}>
        
       
        <View style={styles.frequency}>
            {_renderOnceOption()}
            {_renderFrequentOption()}
          </View>
        <View style={styles.bottomView}>
            <View style={styles.frequencyInfoContainer}>
              {serviceInfo.serviceType.id === 2 && (
                <View style={styles.frequencyOptionContainer}>
                  <Text style={styles.frequencyOptionText}>{strings('common.frequency.recurrence')}</Text>
                  <View style={styles.recurrencePickerContainer}>
                    <Picker
                      selectedValue={recurrenceOption}
                      style={styles.recurrencePicker}
                      onValueChange={itemValue => setRecurrenceOption(itemValue)}>
                      <Picker.Item label={strings('common.frequency.recurrenceOption1')} value={1} />
                      <Picker.Item label={strings('common.frequency.recurrenceOption2')} value={3} />
                    </Picker>
                  </View>
                </View>
              )}
              <View style={{ ...styles.frequencyOptionContainer, marginTop: serviceInfo.serviceType === 2 ? 8 : 0 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.dayOfService')}</Text>
                

                <View style={styles.dateTimePickerTouchableArea}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.calendar} resizeMode="contain" />    
                    <DatePickerApp.Default 
                      value={new Date( service.serviceDay)}
                      mode="date" 
                      parentOnChange={setServiceDay}
                    />
                  </View>
                </View>
              </View>
              <View style={{ ...styles.frequencyOptionContainer, marginTop: 8 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.startOfService')}</Text>
                <View style={styles.dateTimePickerTouchableArea}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.clock} resizeMode="contain" />
                    <DatePickerApp.Default 
                      value={new Date( service.serviceBeginAt)}
                      mode="time" 
                      parentOnChange={setServiceBeginAt}
                    />
                  </View>
                </View>
              </View>
              <Text style={styles.placeQuestion}>{strings('common.service.placeQuestion')}</Text>
              <View style={styles.placeOptionContainer}>
                <View style={styles.placeOptionImageContainer}>{_renderPlaceImage()}</View>
                {_renderPlacesPicker()}
              </View>
              <Text style={styles.serviceHours}>{strings('common.service.hours')}</Text>
              <View style={styles.serviceHoursOptionContainer}>
                <View style={styles.serviceHoursOptionImageContainer}>
                  <Image style={styles.serviceHoursOptionImage} source={Images.clock} resizeMode="contain" />
                </View>
                <View style={styles.serviceHoursPickerContainer}>
                  <Picker selectedValue={serviceInfo.serviceHours} style={styles.serviceHoursPicker} 
                  onValueChange={itemValue => dispatch(setServiceHours(itemValue)) }>
                    {availableHours.map((hour, index) => (
                      <Picker.Item key={index} label={strings('common.service.selectedHours', { hour })} value={hour} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={styles.cardOptionContainer}>
                <Image style={styles.cardOptionImage} source={Images.card} resizeMode="contain" />
                <View style={styles.cardPickerContainer}>
                  <Picker selectedValue={selectedCardId} style={styles.cardPicker} onValueChange={itemValue => _setSelectedCard(itemValue)}>
                    {availableCards.map((card, index) => (
                      <Picker.Item key={card.id} label={strings('common.service.cardEnd', { cardNumber: card.number.substr(12) })} value={card.id} />
                    ))}
                  </Picker>
                </View>
              </View>
              

              <View style={{ marginTop: 12}}>
                <ButtonApp.Default title="Solicitar Servicio" onPress={() => navigation.navigate('ServiceStandby')} />
              </View> 
            </View>
          
          <Touchable
            style={{ ...styles.askForButton, opacity: disabled ? 0.7 : 1, marginTop: disabled ? 0 : 'auto' }}
            // onPress={disabled ? _openPopup : _askForService}
            onPress={() => navigation.navigate('ServiceStandby')}
          >
            <View style={styles.askForButtonPartsContainer}>
              <View style={styles.askForButtonTopPart}>
                <Text style={styles.askForText}>{strings('common.service.askFor').toUpperCase()}</Text>
                <Text style={styles.now}>{strings('common.now').toUpperCase()}</Text>
              </View>
              <View style={styles.askForButtonBottomPart}>
                <Text

                  style={styles.calculatedPrice}>{`${calculatedPrice} - sdasd`}</Text>
              </View>
            </View>
          </Touchable>

          <View style={styles.mapContainer}>
            <ImageBackground source={require('../../assets/images/Global/background.png')} resizeMode="cover" style={{
              width: '100%',
              height: '80%',
              justifyContent: "center"
            }}>


            </ImageBackground>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: -0.1832607 + 0.003,
                longitude: -78.4792473 - 0.003,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              moveOnMarkerPress={false}
              zoomEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}>
              <Marker coordinate={{ latitude: -0.1832607, longitude: -78.4792473 }} image={Images.customMarker} />
            </MapView>
          </View>
        </View>
      </ScrollView>
      {!disabled && (
        <Animated.View style={{ ...styles.scrollArrow, bottom: scrollArrowPosition }}>
          <Touchable onPress={_scroll}>
            <Image style={{ ...styles.scrollArrowImage, ...rotate }} source={Images.whiteDownArrowV2} resizeMode="cover" />
          </Touchable>
        </Animated.View>
      )}
    </View>
  );
};

export default Home;
