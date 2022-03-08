import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Modal from 'react-native-modal';
import { Icon, Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const modalinfo = [
  { acount: 'Limpipuntos', id: '1' },
  { acount: 'Mi cuenta', id: '2' },
  { name: 'Mi perfil', icon: 'person-outline', id: '3', routeKey: 'Profile' },
  { name: 'Servicios', id: '4', routeKey: 'Service' },
  {
    name: 'Historial de Servicios',
    icon: 'newspaper-outline',
    id: '5',
    routeKey: 'LoadingHistory'
  },
  {
    name: 'Direcciones',
    icon: 'location-outline',
    id: '6',
    routeKey: 'LoadingDirection'
  },
  {
    name: 'Método de pago',
    icon: 'card-outline',
    id: '7',
    routeKey: 'PaymentMethod'
  },
  {
    name: 'Centro de Ayuda',
    icon: 'help-buoy-outline',
    id: '8',
    routeKey: 'Help'
  },
  { name: 'Idioma', icon: 'globe-outline', id: '9', routeKey: 'Language' },
  {
    name: 'Notificaciones',
    icon: 'notifications-outline',
    id: '10',
    routeKey: 'Notification'
  },
  { acount: 'Promos y Créditos', id: '11' },
  { name: 'Cupones', id: '12', routeKey: 'Coupon' },
  {
    name: '¿Limpieza gratis?',
    icon: 'gift-outline',
    id: '13',
    routeKey: 'FreeClean'
  },
  { name: 'Limpipuntos', id: '14', routeKey: 'Limpipoint' },
  { acount: 'Información', id: '15' },
  { acount: 'Quiero ser parte', id: '16', routeKey: 'Join' },
  {
    name: 'Términos y Condiciones',
    icon: 'alert-circle-outline',
    id: '17',
    routeKey: ''
  }
];
const ModalMenu = ({
  containerStyles = {},
  iconColor = 'white',
  navigation
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        //backgroundColor: 'white',
        height: 45,
        paddingLeft: 10,
        flexDirection: 'row',
        ...containerStyles
      }}
    >
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="menu-outline" type="ionicon" color={iconColor} />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        presentationStyle="overFullScreen"
        style={{
          marginBottom: 50,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0
        }}
      >
        {/* Modal abierto */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{
                marginLeft: 120,
                justifyContent: 'center',
                width: 130,
                height: 60
              }}
              source={require('../../../assets/images/Global/logo.png')}
              resizeMode="contain"
            />
            <View
              style={{
                marginLeft: 100
              }}
            >
              <Icon
                style={{ marginLeft: 60, paddingLeft: 60 }}
                name="close-outline"
                type="ionicon"
                color="#5f2490"
                onPress={toggleModal}
              />
            </View>
          </View>

          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              backgroundColor: 'white',
              paddingLeft: 15
            }}
          >
            <Icon
              name="person-circle-outline"
              type="ionicon"
              color="#5f2490"
              size={70}
            />

            <View style={{ flexDirection: 'column', paddingTop: 10 }}>
              <Text style={{ color: '#5f2490', fontWeight: 'bold' }}>
                Ricardo Mancero
              </Text>
              <Text style={{ color: '#464648' }}>(4.89)</Text>
              <Text style={{ color: '#464648' }}>Editar perfil</Text>
            </View>
          </View>

          <FlatList
            contentContainerStyle={{ borderRadius: 50, overflow: 'hidden' }}
            keyExtractor={(item) => item.id}
            data={modalinfo}
            ItemSeparatorComponent={() => (
              <Divider
                style={{ width: `86%`, marginLeft: 25 }}
                orientation="horizontal"
                width={2}
                height={0}
              />
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  marginLeft: 25,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  {item.id === '1' ? (
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderRadius: 60,
                        height: 35,
                        marginTop: 0,
                        backgroundColor: '#68c530',
                        width: '94%'
                      }}
                      //onPress={() => navigation.navigate('Home')}
                    >
                      <Text
                        style={{
                          paddingLeft: 10,
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold'
                        }}
                      >
                        Limpipuntos
                      </Text>
                      <Text
                        style={{
                          paddingLeft: 180,
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20
                        }}
                      >
                        100
                      </Text>

                      <View style={{}}>
                        <Icon
                          name="chevron-forward"
                          type="ionicon"
                          color="white"
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <Text></Text>
                  )}

                  {item.id === '2' ? (
                    <View
                      style={{
                        marginTop: 0,
                        backgroundColor: '#5f2490',
                        height: 30,
                        width: '94%',
                        borderRadius: 60,
                        alignContent: 'flex-start',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: 10,
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20
                        }}
                      >
                        {item.acount}
                      </Text>
                    </View>
                  ) : (
                    <Text></Text>
                  )}

                  {item.id === '4' ? (
                    <Image
                      style={{ height: 30, width: 25, tintColor: '#5f2490' }}
                      source={require('../../../assets/images/Global/service1.png')}
                      resizeMode="contain"
                    />
                  ) : (
                    <Icon name={item.icon} type="ionicon" color="#5f2490" />
                  )}

                  {item.id === '11' ? (
                    <View
                      style={{
                        marginTop: 0,
                        backgroundColor: '#68c530',
                        height: 30,
                        width: '94%',
                        borderRadius: 60,
                        alignContent: 'flex-start',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: 10,
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20
                        }}
                      >
                        {item.acount}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}

                  {item.id === '12' ? (
                    <Image
                      style={{ height: 30, width: 25, tintColor: '#5f2490' }}
                      source={require('../../../assets/images/Global/couponIcon.png')}
                      resizeMode="contain"
                    />
                  ) : (
                    <View></View>
                  )}
                  {item.id === '14' ? (
                    <Image
                      style={{ height: 30, width: 25 }}
                      source={require('../../../assets/images/Global/points.png')}
                      resizeMode="contain"
                    />
                  ) : (
                    <View></View>
                  )}
                  {item.id === '15' ? (
                    <View
                      style={{
                        marginTop: 0,
                        backgroundColor: '#3eaee7',
                        height: 30,
                        width: '94%',
                        borderRadius: 60,
                        alignContent: 'flex-start',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                      }}
                    >
                      <Text
                        style={{
                          paddingLeft: 10,
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 20
                        }}
                      >
                        {item.acount}
                      </Text>
                    </View>
                  ) : (
                    <View></View>
                  )}
                  {item.id === '16' ? (
                    <TouchableOpacity
                      onPress={() => {
                        console.log('click');
                        //Aca tiene que redireccionar a la otra app
                        Linking.openURL('https://google.com');
                        toggleModal();
                      }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          style={{
                            height: 30,
                            width: 25,
                            tintColor: '#5f2490'
                          }}
                          source={require('../../../assets/images/Global/normalCleaning.png')}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#5f2490',
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 15
                          }}
                        >
                          {item.acount}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <View></View>
                  )}
                  <Text
                    onPress={() => {
                      navigation.navigate(item.routeKey);
                      toggleModal();
                    }}
                    style={{
                      fontSize: 14,
                      color: '#5f2490',
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 15
                    }}
                  >
                    {item.name}
                  </Text>
                </View>

                {item.id === '1' ||
                item.id === '2' ||
                item.id === '11' ||
                item.id === '15' ? (
                  <View></View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignSelf: 'center',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Icon
                      style={{ marginRight: 25 }}
                      name="chevron-forward"
                      type="ionicon"
                      color="#5f2490"
                    />
                  </View>
                )}
              </View>
            )}
          ></FlatList>
        </View>
      </Modal>
    </View>
  );
};

export default withNavigation(ModalMenu);
