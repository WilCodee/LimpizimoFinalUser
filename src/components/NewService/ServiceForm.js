import React, {useContext} from 'react';
import DatePickerApp from '../../components/DatePickerApp';
import {Image, StyleSheet, View, Text} from 'react-native';
import Images from '../../assets/images';
import Colors from '../../constants/colors';
import {AuthContext} from '../../context/AuthContext';
import {NewServiceContext} from '../../context/NewServiceContext';
import SelectApp from '../SelectApp';
import {HStack} from 'native-base';
import TextApp from '../TextApp';

const hourOptions = [2, 4, 6, 8];

const ServiceForm = () => {
  const {user} = useContext(AuthContext);
  const {
    service,
    setServiceDay,
    setServiceBeginAt,
    setServiceAddress,
    setServiceHours,
  } = useContext(NewServiceContext);

  const handleSelectAddress = addressId => {
    const foundAddress = user.addresses.find(
      address => address._id['$oid'] === addressId,
    );
    console.info('foundAddress', foundAddress);
    setServiceAddress(foundAddress);
  };

  const getCleanAdresses = () => {
    let cleans = [];
    if('addresses' in user && user.addresses.length>0){
      user.addresses.map(address => {
        const cleanAddress = {
          id: address._id['$oid'],
          label: `${address.principal_street}, ${address.secondary_street}`,
          value: address._id['$oid'],
        };
        cleans.push(cleanAddress);
      });
    }
    return cleans;
  };

  const getCleanHourOptions = () => {
    let cleanHours = [];
    hourOptions.map(hourOption => {
      const cleanHour = {
        id: hourOption,
        label: `${hourOption} horas`,
        value: hourOption,
      };
      cleanHours.push(cleanHour);
    });
    return cleanHours;
  };

  const getSelectedAddress = () => {

    if('_id' in service.serviceAddress){
      return service.serviceAddress._id['$oid']   
    }

    if('addresses' in user && user.addresses.length > 0){
      return user.addresses[0]._id['$oid']
    }

    return 0;
  }

  return (
    <View style={styles.mainContainer}>
      <HStack space={2} justifyContent="space-between">
        <View style={{flex: 1}}>
          <DatePickerApp.Default
            label="Día del servicio"
            onChange={setServiceDay}
            
          />
        </View>
        <View style={{flex: 1}}>
          <DatePickerApp.Default
            label="Inicio del servicio"
            onChange={setServiceBeginAt}
            mode="time"
          />
        </View>
      </HStack>

      <SelectApp.Default
        label="¿Dónde lo quieres?"
        placeholder="Seleccionar"
        selectedValue={getSelectedAddress()}
        onSelect={handleSelectAddress}
        items={getCleanAdresses()}
      />

      <SelectApp.Default
        label="Horas de servicio"
        placeholder="Seleccionar"
        selectedValue={service.serviceHours}
        onSelect={setServiceHours}
        items={getCleanHourOptions()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  fieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  dateTimePickerImage: {
    width: 20,
    height: 20,
  },

  fieldText: {
    fontWeight: 'bold',
  },

  placeOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    padding: 3,
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: 9,
  },

  placePickerInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  placePicker: {
    height: 24,
    marginHorizontal: -28,
    marginTop: -4,
    color: Colors.mainColorLight,
    transform: [{scale: 0.8}],
  },
});

export default ServiceForm;
