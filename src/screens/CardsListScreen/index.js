import React, {useContext, useEffect, useState} from 'react';
import {FlatList, HStack, View, VStack} from 'native-base';
import {ActivityIndicator, Image} from 'react-native';
import InternalContainer from '../../containers/InternalContainer';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import ButtonApp from '../../components/ButtonApp';
import {AuthContext} from '../../context/AuthContext';
import {getData} from '../../utils/fetch/getData';
import AddressItem from '../../components/AddressList/AddressItem';
import Carousel from 'react-native-snap-carousel';
import {generateAuthToken} from '../../utils/paymentez';
import {all} from '../../utils/cards';
import {WebView} from 'react-native-webview';

const CardsListScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  
  console.log('url', `https://paymentez-form.web.app/list?userId=${user['_id']['$oid']}`)
  
  


  return (
    <InternalContainer
      title="Métodos de Pago"
      iconName="card"
      iconType="ionicon"
      iconColor="white">
      <View pt={8} pb={2} flex={1}>
        <TextApp.Default
          fontSize={30}
          fontWeight="bold"
          textAlign="center"
          value="Mis Métodos de pago"
        />

        <WebView
          originWhitelist={['*']}
          source={{
            uri: `https://paymentez-form.web.app/list?userId=${user['_id']['$oid']}`,
          }}
          style={{marginTop: 20}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />

        <ButtonApp.Default
          title="Agregar nuevo"
          onPress={() => navigation.navigate('CardForm')}
        />
      </View>
    </InternalContainer>
  );
};

export default CardsListScreen;
