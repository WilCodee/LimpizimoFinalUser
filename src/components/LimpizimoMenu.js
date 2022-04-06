import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import colors from '../constants/colors';
import EmergencyButton from './EmergencyButton';
import ImageUserProfile from './ImageUserProfile';
import {AuthContext} from '../context/AuthContext';
import ButtonApp from './ButtonApp';

function LimpizimoMenu() {
  const navigation = useNavigation();

  const {user, logout} = useContext(AuthContext);

  const modalinfo = [
    {title: 'Mi cuenta', type: 'listTitle'},
    {
      title: 'Mi perfil',
      icon: 'person',
      iconType: 'ionicon',
      type: 'listItem',
      routeKey: 'UserProfile',
    },
    {
      title: 'Servicios',
      icon: 'cleaning-services',
      iconType: 'material',
      type: 'listItem',
      routeKey: 'ServicesDetail',
    },
    {
      title: 'Historial de Servicios',
      icon: 'history',
      iconType: 'material',
      type: 'listItem',
      routeKey: 'ServiceHistory',
    },
    {
      title: 'Direcciones',
      icon: 'home',
      iconType: 'material',
      type: 'listItem',
      routeKey: 'AddressList',
    },
    {
      title: 'Métodos de pago',
      icon: 'card',
      iconType: 'ionicon',
      type: 'listItem',
      routeKey: 'CardsList',
    },
    {
      title: 'Centro de Ayuda',
      icon: 'help-buoy',
      type: 'listItem',
      iconType: 'ionicon',
      routeKey: 'Help',
    },
    {
      title: 'Notificaciones',
      icon: 'notifications-outline',
      type: 'listItem',
      iconType: 'ionicon',
      routeKey: 'Notification',
    },
    {title: 'Promos y Créditos', type: 'listTitle'},
    {
      title: 'Limpipuntos',
      type: 'listItem',
      icon: 'coins',
      iconType: 'font-awesome-5',
      routeKey: 'LimpiPoint',
    },
    {title: 'Información', type: 'listTitle'},

    {
      title: 'Términos y Condiciones',
      icon: 'alert-circle-outline',
      type: 'listItem',
      iconType: 'ionicon',
      routeKey: 'TermsConditions',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        display: 'flex',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 130,
            height: 60,
          }}
          source={require('../assets/images/Global/logo.png')}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          paddingLeft: 15,
          marginBottom: 25,
        }}>
        <View style={{marginLeft: 10}}>
          <ImageUserProfile
            isVerified={false}
            imageUrl="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
            size={96}
            fullRounded={true}
            borderThickness={2}
            outlineColor={colors.secondaryColor}
          />
        </View>

        <View style={{flexDirection: 'column', paddingLeft: 10}}>
          <Text style={{color: '#73BF43', fontWeight: 'bold', fontSize: 22}}>
            {user?.name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: colors.greyText2,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              (5
            </Text>
            <Icon
              size={16}
              name="star"
              type="ionicon"
              color={colors.secondaryColor}
            />
            <Text
              style={{
                color: colors.greyText2,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              )
            </Text>
          </View>
          <Text style={{color: colors.greyText2, fontSize: 16, marginTop: 5}}>
            Editar perfil
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.listMainTitleContainer}>
          <View style={styles.utilityRow}>
            <Image
              style={{height: 32, width: 32}}
              source={require('../assets/images/Global/limp2.png')}
              resizeMode="contain"
            />
            <Text style={styles.listMainTitleText}>Limpipuntos</Text>
            <Text style={[styles.listMainTitleText, {marginLeft: 10}]}>
              100
            </Text>
          </View>
          <Icon
            size={32}
            name="chevron-right"
            type="material-community"
            color="white"
          />
        </View>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={{paddingHorizontal: 25, overflow: 'hidden'}}
        keyExtractor={item => item.title}
        data={modalinfo}
        renderItem={({item}) =>
          item.type === 'listItem' ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.routeKey);
              }}>
              <View style={[styles.menuItem, styles.listItemContainer]}>
                <View style={styles.utilityRow}>
                  {item.title === 'Limpipuntos' ? (
                    <Image
                      style={{height: 32, width: 32}}
                      source={require('../assets/images/Global/limp1.png')}
                      resizeMode="contain"
                    />
                  ) : (
                    <Icon
                      size={24}
                      name={item.icon}
                      type={item.iconType}
                      color={colors.secondaryColor}
                    />
                  )}
                  <Text style={styles.listItemText}>{item.title}</Text>
                </View>
                <Icon
                  size={28}
                  name="chevron-right"
                  type="material"
                  color={colors.secondaryColor}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.menuItem,
                item.title === 'Información'
                  ? styles.listTitleContainerTertiary
                  : styles.listTitleContainer,
              ]}>
              <Text style={styles.listTitleText}>{item.title}</Text>
            </View>
          )
        }
      />
      <ButtonApp.Default title="Cerrar Sesión" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  listMainTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryColor,
    height: 40,
    borderRadius: 40,
    marginHorizontal: 25,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  listMainTitleText: {
    color: colors.mainColorLight,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listTitleContainer: {
    backgroundColor: colors.secondaryColor,
    height: 30,
    paddingLeft: 15,
  },
  listTitleContainerTertiary: {
    backgroundColor: colors.tertiaryColor,
    paddingLeft: 15,
  },
  listTitleText: {
    color: 'white',
    fontSize: 18,
  },
  listItemContainer: {
    height: 40,
    paddingLeft: 15,
  },
  listItemText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.secondaryColor,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 6,
  },
  utilityRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LimpizimoMenu;
