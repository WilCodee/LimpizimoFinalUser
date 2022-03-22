import {View, Text} from 'react-native';
import React from 'react';
import InternalContainer from '../../containers/InternalContainer';
import ProblemBtn from './components/ProblemBtn.js';
import Images from '../../assets/images';

const HelpScreen = ({navigation}) => {
  return (
    <InternalContainer
      title="¿Cómo te ayudamos?"
      subtitle="Seleccione la consulta"
      iconName="forum"
      iconColor="white"
      navigation={navigation}>
      <View style={{marginVertical: 50}}>
        <ProblemBtn
          image={Images.service}
          title="Problemas con el servicios o tarifas"
        />
        <ProblemBtn image={Images.user} title="Problemas con la colaboradora" />
      </View>
    </InternalContainer>
  );
};

export default HelpScreen;
