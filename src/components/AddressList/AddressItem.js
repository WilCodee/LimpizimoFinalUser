import {Box, HStack, View, VStack} from 'native-base';
import React from 'react';
import TextApp from '../TextApp';
import {Image} from 'react-native';

const AddressItem = ({address}) => {
  return (
    <View backgroundColor="#ECEDEE" my={1} px={4} py={4} >
      <Box backgroundColor="#263648" px={4} py={4} borderRadius={25}>
        <HStack space={2}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/Global/house.png')}
            style={{width: 60, height: 40, tintColor: 'white'}}
          />
          <VStack>
            <HStack space={2}>
              <TextApp.Default color="white" value="País:" fontWeight="bold" />
              <TextApp.Default color="white" value={address.country} />
            </HStack>

            <HStack space={2}>
              <TextApp.Default
                color="white"
                value="Ciudad:"
                fontWeight="bold"
              />
              <TextApp.Default color="white" value={address.city} />
            </HStack>

            <HStack space={2}>
              <TextApp.Default
                color="white"
                value="Dirección:"
                fontWeight="bold"
              />

              <TextApp.Default
                color="white"
                value={
                  address.principal_street + ' ' + address.secondary_street
                }
              />
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </View>
  );
};

export default AddressItem;
