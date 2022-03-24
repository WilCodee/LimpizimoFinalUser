import {View, Text} from 'react-native';
import React from 'react';
import InternalContainer from '../../containers/InternalContainer';
import SwitchComponent from './components/SwitchComponent';

const NotificationsScreen = ({navigation}) => {
  return (
    <InternalContainer
      title="Centro de Notificaciones"
      subtitle={`Administra las notificaciones promocionales\n que quieres recibir de limpizimo`}
      subtitleTextAlign="center"
      iconName="notifications"
      iconColor="white"
      navigation={navigation}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
        <View style={{width: '90%'}}>
          <SwitchComponent title="SMS" />
          <SwitchComponent title="E-mails" />
          <SwitchComponent title="Notificaciones push" />
          <SwitchComponent title="Pop-ups" />
        </View>
      </View>
    </InternalContainer>
  );
};

export default NotificationsScreen;
