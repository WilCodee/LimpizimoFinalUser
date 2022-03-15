import React, {useState} from 'react';
import Images from '../../assets/images';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Modal, Button, FlatList, Box, HStack, Avatar, VStack, Text, Pressable} from 'native-base';
import colors from '../../constants/colors';

const menuOptions =  [
  {
    label: 'Mi cuenta',
    isTitle: true, 
    titleBackgroundColor: colors.primaryColor
  },
  {label: 'Mi perfil', icon: 'person-outline', routeKey: 'Profile'},
  {label: 'Servicios', routeKey: 'Service', route: 'AddressList'},
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
    route: 'AddressList'
  },
  {
    label: 'Método de pago',
    icon: 'card-outline',
    id: '7',
    routeKey: 'PaymentMethod',
    route: 'CardsList'
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
  {label: 'Promos y Créditos', id: '11', 
  isTitle: true, 
    titleBackgroundColor: colors.secondaryColor
  },
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


const MenuItem = ({item, navigation}) => {
  if(item.isTitle){
    return(
      <Box 
        style={{ backgroundColor: item.titleBackgroundColor }}
        pl={4}
        py={1}
        borderRadius={25}
      > 
         <Text style={{color: 'white'}} >{item.label}</Text> 
      </Box>
    )
  }

  if(typeof(item.isTitle)==="undefined"){
    return(
      <Pressable
      onPress={() =>  navigation.navigate(item.route) }
      >
        <HStack
     space={2} 
     borderBottomWidth="1"
                  borderColor="coolGray.200"
                  py={2} >
                    <Avatar
                      size="48px"
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
                      }}
                    />
                    
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        {item.label}
                      </Text>

                  </HStack>
                  </Pressable>
   
    )
  }
}


const Default = ({title, navigation}) => {
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
        <Modal.Content width="300px" height="900px">
          <Modal.CloseButton />
          <Modal.Header>
            <HStack space={2}>
             <Avatar
                      size="48px"
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
                      }}
                      borderWidth="2"
                      borderColor={colors.secondaryColor}
                    />

                    <VStack>
                      <Text>Ricardo Mancero</Text>
                      <Text>4.89</Text>
                      <Text>Editar Perfil</Text>
                    </VStack>

                    </HStack>
          </Modal.Header>
          <Modal.Body>
            <FlatList
              data={menuOptions}
              renderItem={({item}) => (
                <MenuItem item={item} navigation={navigation} />
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