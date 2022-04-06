import {View} from 'react-native';
import React from 'react';
import InternalContainer from './../../containers/InternalContainer/index';
import colors from '../../constants/colors';
import EmptyHistory from './EmptyHistory';
import History from './History';

const ServiceHistoryScreen = ({navigation}) => {
  return (
    <InternalContainer
      iconName="list-alt"
      iconColor={colors.mainColorLight}
      iconType="fontAwesome5Brands"
      title="Historial de servicios"
      subtitle="Revisa el historial de los servicios realizados"
      subTitleFontSize={12}
      navigation={navigation}>
      <View style={{margin: 20}}>
        {/* <EmptyHistory /> */}

        <History />
      </View>
    </InternalContainer>
  );
};

export default ServiceHistoryScreen;
