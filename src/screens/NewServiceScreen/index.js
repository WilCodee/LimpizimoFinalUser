import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Greeting from '../../components/Greeting';
import {AuthContext} from '../../context/AuthContext';
import MainContainer from '../../containers/MainContainer';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import MenuApp from '../../components/MenuApp';
import CleanTypeSelector from '../../components/NewService/CleanTypeSelector';
import ServiceTypeSelector from '../../components/NewService/ServiceTypeSelector';
import ButtonApp from '../../components/ButtonApp';
import ServiceForm from '../../components/NewService/ServiceForm';
import {NewServiceContext} from '../../context/NewServiceContext';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoicGFibG90cnVqaWxsbyIsImEiOiJjbDBvcTBsZnUxczVuM2hvdDNxN25xbmRtIn0.thrjGHBdDcIr7ykZMghmiw',
);
MapboxGL.setConnected(true);

const NewServiceScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const {service} = useContext(NewServiceContext);
  const [coordinates, setCoordinates] = useState([-78.55424, -0.28273]);
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <Greeting value={'Hello ' + user.name} />

        <MainContainer>
          <MenuApp.Default
            title="¿Qué servicio necesitas?"
            navigation={navigation}
          />
          <TextApp.Default
            color="white"
            textAlign="center"
            value="Elige el tipo de limpieza"
            fontSize={14}
          />
          <CleanTypeSelector />
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 20,
              borderRadius: 25,
              paddingVertical: 8,
              marginTop: 12,
            }}>
            <ServiceTypeSelector />
            <ServiceForm />
            <View style={{marginTop: 12, marginHorizontal: 20}}>
              <ButtonApp.Default
                title="Solicitar Servicio"
                onPress={() => navigation.navigate('ServiceStandby')}
              />
            </View>
          </View>
        </MainContainer>

        <View style={styles.page}>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera zoomLevel={16} 
              centerCoordinate={'serviceAddress' in service ? ['longitude' in service.serviceAddress ? service.serviceAddress.longitude: coordinates[0] , 'latitude' in service.serviceAddress ? service.serviceAddress.latitude : coordinates[1]] : coordinates} 
              />
              <MapboxGL.PointAnnotation 
              coordinate={'serviceAddress' in service ? ['longitude' in service.serviceAddress ? service.serviceAddress.longitude: coordinates[0] , 'latitude' in service.serviceAddress ? service.serviceAddress.latitude : coordinates[1]] : coordinates} 
              />
              </MapboxGL.MapView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default NewServiceScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: colors.primaryColor,
  },
  mapContainer: {
    position: 'absolute',
    bottom: -50,
    zIndex: -1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
    width: 60,
    backgroundColor: 'transparent',
    height: 70,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 5,
    flex: 1,
  },
});
