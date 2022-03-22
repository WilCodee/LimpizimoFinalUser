import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';
//import { strings } from '../../i18n';
import Images from '../../assets/images';
import CONSTANTS from '../../constants';
import colors from '../../constants/colors';
import useInterval from '../../customHooks/useInterval';
//import KeepWaitingService from '../../modals/KeepWatingService';
//import { updateServiceStatusSocket } from '../../store/actions/webSockets';

const ServiceStandby = ({navigation}) => {
  //const isServiceAssigned = useSelector(state => state.services.isServiceAssigned);
  const [delay, setDelay] = useState(CONSTANTS.WAITING_TIME);
  const [isTimeOver, setIsTimeOver] = useState(false);
  //const serviceId = useSelector(state => state.services.askForService.idService);
  //const dispatch = useDispatch();

  useEffect(() => {
    /*if (isServiceAssigned) {
      setDelay(null);
      setIsTimeOver(false);
      navigation.navigate({
        routeName: 'EmployeeFound',
        key: 'EmployeeFound',
      });
    }*/
    setTimeout(() => {
      setDelay(null);
      setIsTimeOver(false);
      navigation.navigate('AvailableBusiness');
    }, 2000)
  }, []);

  useInterval(() => {
    _openModal();
  }, delay);

  const _openModal = () => {
    setIsTimeOver(true);
    setDelay(null);
  };

  const _onCloseModal = () => {
    setIsTimeOver(false);
    setDelay(CONSTANTS.WAITING_TIME);
  };

  const _onRequestServiceAgainPressed = () => {
    //dispatch(updateServiceStatusSocket('sala1', 'update-service', serviceId, 'Cancelado', strings('cancelReasons.waitingTime')));
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buscando la mejor colaboradora para tu zona. Te notificaremos enseguida.</Text>
      <Image style={styles.logo} source={Images.animatedBroom} resizeMode="contain" />
    </View>
  );
};

export default ServiceStandby;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
  },
  text: {
    color: 'white',
    marginBottom: 0,
    fontSize: 21,
    textAlign: 'center',
    paddingLeft: 45,
    paddingRight: 45,
  },
  logo: {
    marginTop: 0,
    width: 170,
    height: 150,
  },
});