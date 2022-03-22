import {View, Text} from 'react-native';
import React from 'react';
import InternalContainer from '../../containers/InternalContainer';
import ProblemBtn from './components/ProblemBtn';

const Page25 = ({navigation}) => {
  return (
    <InternalContainer
      title="¿Cómo te ayudamos?"
      subtitle="Seleccione la consulta"
      navigation={navigation}>
      <View style={{marginVertical: 50}}>
        <ProblemBtn />
      </View>
    </InternalContainer>
  );
};

export default Page25;
