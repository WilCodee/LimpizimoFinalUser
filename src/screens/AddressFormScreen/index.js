import React from 'react';
import {StyleSheet, Image} from 'react-native';
import InternalContainer from '../../containers/InternalContainer';
import {HStack, Input, View} from 'native-base';
import ButtonApp from '../../components/ButtonApp';
import MapboxGL from '@react-native-mapbox-gl/maps';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import ModalForm from '../../components/AddressForm/ModalForm';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoicGFibG90cnVqaWxsbyIsImEiOiJjbDBvcTBsZnUxczVuM2hvdDNxN25xbmRtIn0.thrjGHBdDcIr7ykZMghmiw',
);
MapboxGL.setConnected(true);

const AddressFormScreen = () => {
  const [query, setQuery] = React.useState('');
  const [coordinates, setCoordinates] = React.useState([-79.922356, -2.170998]);

  const search = () => {
    const formattedQuery = query.replace(' ', '%20');
    const url = `https://dev.virtualearth.net/REST/v1/Locations/Quito%2CEcuador%20${formattedQuery}?o=json&key=Ah4kVH3BsgdiHqEYMww44hbC7XVhH9KqJ6Hq0LdsjNfyz3F5HA24gpVAhGAIVBA6`;
    const r = fetch(url);
    const json = r.then(response => response.json());
    return json;
  };

  const iq = async () => {
    const req = await search();
    console.log('req', req.resourceSets);
    console.log('resources', req.resourceSets[0].resources);
    const resources = req.resourceSets[0].resources;
    const location = resources[0].point.coordinates;
    setCoordinates([location[1], location[0]]);
  };

  return (
    <InternalContainer
      title="Direcciones"
      iconName="location-outline"
      iconType="ionicon"
      iconColor="white">
      <View pt={4} pb={2} flex={1}>
        <HStack space={2} justifyContent="space-between" mx={2} mb={4}>
          <Input
            onChangeText={t => setQuery(t)}
            placeholder="Juan Camacaro y Serapio Japerabi"
            flex={1}
          />

          <ButtonApp.Default title="Buscar" onPress={iq} />
        </HStack>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={16} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
        </MapboxGL.MapView>
        <ModalForm query={query} coordinates={coordinates} />
      </View>
    </InternalContainer>
  );
};

export default AddressFormScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
