import React from 'react'; 
import {View,Text, Image} from 'react-native'
import Touchable from 'react-native-platform-touchable';
import styles from '../styles';
import { strings } from '../../../i18n';
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../../assets/images'
import EStyleSheet from 'react-native-extended-stylesheet';
// import { getPlaces } from '../../store/actions/places';
import { setCleanType, setServiceType } from '../../../store/actions/service';
import {Picker} from '@react-native-picker/picker';


const _renderNormalCleaningImage = (cleanTypeId) => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: cleanTypeId === 1 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: cleanTypeId === 1 ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.normalCleaning} resizeMode="contain" />
    </View>
);

const _renderDeepCleaningImage = (cleanTypeId) => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: cleanTypeId === 2 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: cleanTypeId === 2 ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.deepCleaning} resizeMode="contain" />
    </View>
);


const _renderOnceOption = (serviceTypeId, onPress) => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: serviceTypeId === 1 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: serviceTypeId === 1 ? '55%' : '45%',
      }}
      onPress={onPress}>
      <Text style={styles.frequencyText}>{strings('common.service.once')}</Text>
    </Touchable>
);

const _renderFrequentOption = (serviceTypeId, onPress) => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: serviceTypeId === 2 ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: serviceTypeId === 2 ? '55%' : '45%',
      }}
      onPress={onPress}>
      <Text style={styles.frequencyText}>{strings('common.service.frequent')}</Text>
    </Touchable>
);






const ServicesSelector = () => {
    const dispatch = useDispatch()
    const serviceInfo = useSelector(state => state.service)

    const toggleCleanType = cleanTypeId => dispatch(setCleanType(cleanTypeId))
    const toggleServiceType = serviceTypeId => dispatch(setServiceType(serviceTypeId))
    console.info('serviceInfo', serviceInfo)
    return(
        <View style={styles.cleaningOptionsContainer}>
          <Touchable onPress={() => toggleCleanType(1)}>
            <View style={styles.cleaningOption}>
              {_renderNormalCleaningImage(serviceInfo.cleanType.id)}
              <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
              <Text style={styles.cleaningDeepText}>{strings('common.cleaning.normal').toUpperCase()}</Text>
            </View>
          </Touchable>
          <Touchable onPress={() => toggleCleanType(2)}>
            <View style={styles.cleaningOption}>
              {_renderDeepCleaningImage(serviceInfo.cleanType.id)}
              <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
              <Text style={styles.cleaningDeepText}>{strings('common.cleaning.deep').toUpperCase()}</Text>
            </View>
          </Touchable>
          <View style={styles.bottomView}>
          
            <View style={styles.frequency}>
              {_renderOnceOption()}
              {_renderFrequentOption()}
            </View>
            <View style={styles.frequencyInfoContainer}>
              { serviceInfo.serviceType.id === 1  && (
                <View style={styles.frequencyOptionContainer}>
                  <Text style={styles.frequencyOptionText}>{strings('common.frequency.recurrence')}</Text>
                  <View style={styles.recurrencePickerContainer}>
                    <Picker
                      selectedValue={serviceInfo.serviceType}
                      style={styles.recurrencePicker}
                      onValueChange={itemValue => setRecurrenceOption(itemValue)}>
                      <Picker.Item label={strings('common.frequency.recurrenceOption1')} value={1} />
                      <Picker.Item label={strings('common.frequency.recurrenceOption2')} value={3} />
                    </Picker>
                  </View>
                </View>
              )}
              <View style={{ ...styles.frequencyOptionContainer, marginTop: serviceInfo.serviceType.id === 2 ? 8 : 0 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.dayOfService')}</Text>
                <Touchable style={styles.dateTimePickerTouchableArea} onPress={() => setShowDatepicker(true)}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.calendar} resizeMode="contain" />
                    <Text style={styles.dateTimePickerText}>{new Date().toFormat( serviceInfo.serviceType.id === 2 ? 'EEEE' : 'dd/MM/yyyy')}</Text>
                      <DateTimePicker
                        value={new Date().toJSDate()}
                        mode="date"
                        minimumDate={new Date()}
                        maximumDate={DateTime.local()
                          .plus({ days: 15 })
                          .toJSDate()}
                        onChange={(event, date) => _setDate(date)}
                      />
                    
                  </View>
                </Touchable>
              </View>
              <View style={{ ...styles.frequencyOptionContainer, marginTop: 8 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.startOfService')}</Text>
                <Touchable style={styles.dateTimePickerTouchableArea} onPress={() => setShowTimepicker(true)}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.clock} resizeMode="contain" />
                    <Text style={styles.dateTimePickerText}>{time.toFormat('HH:mm')}</Text>
                    {showTimepicker && <DateTimePicker value={time.toJSDate()} mode="time" onChange={(event, date) => _setTime(date)} />}
                  </View>
                </Touchable>
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
                  <Picker selectedValue={selectedHour} style={styles.serviceHoursPicker} onValueChange={itemValue => _setSelectedHour(itemValue)}>
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

                  style={styles.calculatedPrice}>{`$${calculatedPrice}`}</Text>
              </View>
            </View>
          </Touchable>

          <View style={styles.mapContainer}>
            <ImageBackground source={require('../../../assets/images/Global/background.png')} resizeMode="cover" style={{
              width: '100%',
              height: '85%',
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
        </View>
    )
}


export default ServicesSelector; 