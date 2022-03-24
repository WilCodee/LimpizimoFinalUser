import {View, Text} from 'react-native';
import React from 'react';
import InternalContainer from '../../containers/InternalContainer';
import ButtonApp from '../../components/ButtonApp';

const GeneralProblemsScreen = ({navigation}) => {
  return (
    <InternalContainer
      iconName="forum"
      iconColor="white"
      title="Problema con el servicio o tarifas"
      subtitle="Seleccione la consulta"
      navigation={navigation}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <View style={{width: '80%'}}>
          <ButtonApp.Default title="Devoluciones" position="flex-start" />
          <ButtonApp.Default
            title="Tarifa cobrada dos veces"
            position="flex-start"
          />
          <ButtonApp.Default
            title="Problemas con un cobro"
            position="flex-start"
          />
        </View>
      </View>
    </InternalContainer>
  );
};

export default GeneralProblemsScreen;
