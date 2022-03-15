import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View, VStack} from 'native-base';
import {ActivityIndicator, Image} from 'react-native';
import InternalContainer from '../../containers/InternalContainer';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import ButtonApp from '../../components/ButtonApp';
import {AuthContext} from '../../context/AuthContext';
import {getData} from '../../utils/fetch/getData';
import AddressItem from '../../components/AddressList/AddressItem';

const AddressListScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialRequest = async () => {
    setLoading(true);
    const request = await getData(
      `address/getAllAddresses/${user._id['$oid']}`,
    );
    if (request.OK) {
      setAddresses(request.addresses);
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    initialRequest();
  }, []);

  return (
    <InternalContainer
      title="Direcciones"
      iconName="location-outline"
      iconType="ionicon"
      iconColor="white">
      <View pt={8} pb={2} flex={1}>
        <TextApp.Default
          fontSize={30}
          fontWeight="bold"
          textAlign="center"
          value="Mis Direcciones"
        />
        {!loading && addresses.length === 0 && (
          <>
            <TextApp.Default
              color={colors.greyTextLight}
              textAlign="center"
              value="Acá podrás observar tus direcciones"
            />
            <Image
              resizeMode="contain"
              source={require('../../assets/images/Global/direction.png')}
              style={{width: 360, height: 220, marginTop: 8}}
            />
          </>
        )}

        {loading && (
          <ActivityIndicator size="small" color={colors.primaryColor} />
        )}

        {addresses.length > 0 && (
          <FlatList
            data={addresses}
            renderItem={({item}) => <AddressItem address={item} />}
            keyExtractor={item => item.secondary_street}
          />
        )}

        <ButtonApp.Default
          title="Agregar nueva"
          onPress={() => navigation.navigate('AddressForm')}
        />
      </View>
    </InternalContainer>
  );
};

export default AddressListScreen;
