import React, {useContext, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Greeting from '../../components/Greeting';
import {AuthContext} from '../../context/AuthContext';
import BingMapsView from 'react-native-bing-maps';
import MainContainer from '../../containers/MainContainer';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import MenuApp from '../../components/MenuApp';
import CleanTypeSelector from '../../components/NewService/CleanTypeSelector';
import ServiceTypeSelector from '../../components/NewService/ServiceTypeSelector';
import ButtonApp from '../../components/ButtonApp';
import ServiceForm from '../../components/NewService/ServiceForm';
import { NewServiceContext } from '../../context/NewServiceContext';

const NewServiceScreen = () => {
  const {logout, user} = useContext(AuthContext);
  const { service } = useContext(NewServiceContext)
  const [lat, setLat] = React.useState(-2.170998);
  const [long, setLong] = React.useState(-79.922356);

  console.log('service', service)
  console.log('user', user)
  return (
    <>
      <ScrollView contentContainerStyle={styles.screenContainer} >
        <Greeting value={'Hello ' + user.name} />
        
        <MainContainer>
            <MenuApp.Default title="¿Qué servicio necesitas?" />
            <TextApp.Default color="white" textAlign="center" value='Elige el tipo de limpieza' fontSize={14} />
            <CleanTypeSelector />
            <View style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 25, paddingVertical: 8, marginTop: 12 }}>
                <ServiceTypeSelector />
                <ServiceForm />
                <View style={{ marginTop: 12, marginHorizontal: 20 }}>
                    <ButtonApp.Default title="Solicitar Servicio" onPress={() => navigation.navigate('ServiceStandby')} />
                </View> 
            </View>
        </MainContainer>
        
        <View style={styles.mapContainer} >
        <BingMapsView
            credentialsKey="Ah4kVH3BsgdiHqEYMww44hbC7XVhH9KqJ6Hq0LdsjNfyz3F5HA24gpVAhGAIVBA6"
            mapLocation={{lat: lat, long: long, zoom: 15}}
            style={{ height: 400, width: 600}}
        />
        </View>
      </ScrollView>
    </>
  );
};

export default NewServiceScreen;

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: colors.primaryColor
    },
    mapContainer: {
        position:'absolute',
        bottom: -50,
        zIndex: -1
    }
})