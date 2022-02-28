import React, {useState} from 'react';
import Images from '../../assets/images';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Modal, Button, FlatList, Box, HStack, Avatar, VStack, Text} from 'native-base';

const menuOptions = [
  {
    label: 'Mi cuenta',
  },
  {label: 'Mi perfil', icon: 'person-outline', routeKey: 'Profile'},
  {label: 'Servicios', routeKey: 'Service'},
  {
    label: 'Historial de Servicios',
    icon: 'newspaper-outline',
    id: '5',
    routeKey: 'LoadingHistory',
  },
  {
    label: 'Direcciones',
    icon: 'location-outline',
    id: '6',
    routeKey: 'LoadingDirection',
  },
  {
    label: 'Método de pago',
    icon: 'card-outline',
    id: '7',
    routeKey: 'PaymentMethod',
  },
  {
    label: 'Centro de Ayuda',
    icon: 'help-buoy-outline',
    id: '8',
    routeKey: 'Help',
  },
  {label: 'Idioma', icon: 'globe-outline', id: '9', routeKey: 'Language'},
  {
    label: 'Notificaciones',
    icon: 'notifications-outline',
    id: '10',
    routeKey: 'Notification',
  },
  {label: 'Promos y Créditos', id: '11'},
  {label: 'Cupones', id: '12', routeKey: 'Coupon'},
  {
    label: '¿Limpieza gratis?',
    icon: 'gift-outline',
    id: '13',
    routeKey: 'FreeClean',
  },
  {label: 'Limpipuntos', id: '14', routeKey: 'Limpipoint'},
  {label: 'Información', id: '15'},
  {label: 'Quiero ser parte', id: '16', routeKey: 'Join'},
  {
    label: 'Términos y Condiciones',
    icon: 'alert-circle-outline',
    id: '17',
    routeKey: '',
  },
];

const Default = ({title}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 8,
        marginLeft: 12,
      }}>
      <View style={{flex: 0.5}}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Image
            source={Images.whiteRightArrowV2}
            style={styles.popupImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Menu</Modal.Header>
          <Modal.Body>
            <FlatList
              data={menuOptions}
              renderItem={({item}) => (
                <Box
                  borderBottomWidth="1"
                  borderColor="coolGray.200"
                  pl="4"
                  pr="5"
                  py="2">
                  <HStack space={3} justifyContent="space-between">
                    <Avatar
                      size="48px"
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
                      }}
                    />
                    <VStack>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        {item.label}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={item => item.label}
            />
          </Modal.Body>
        
        </Modal.Content>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popupImg: {
    width: 20,
    height: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Default;
