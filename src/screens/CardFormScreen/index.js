import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import InternalContainer from '../../containers/InternalContainer';
import colors from '../../constants/colors';
import {AuthContext} from '../../context/AuthContext';
import {WebView} from 'react-native-webview';

const CardFormScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);

  return (
    <InternalContainer
      title="Nuevo Método de Pago"
      iconName="card"
      iconType="ionicon"
      iconColor="white">
      <WebView
        originWhitelist={['*']}
        source={{
          uri: `https://paymentez-form.web.app/?userId=${user['_id']['$oid']}&userEmail=${user.email}`,
        }}
        style={{marginTop: 20}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </InternalContainer>
  );
};

export default CardFormScreen;

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginTop: 24,
    marginHorizontal: 12,
    backgroundColor: colors.primaryColor,
    //backgroundColor: 'red'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
