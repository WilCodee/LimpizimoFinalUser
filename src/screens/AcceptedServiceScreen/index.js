import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import MenuApp from './../../components/MenuApp';
import TextApp from './../../components/TextApp';
import colors from '../../constants/colors';
import Images from '../../assets/images';
import ItemDetail from './components/ItemDetail';
import ImageUserProfile from '../../components/ImageUserProfile';
import Card from './components/Card';

const AcceptedServiceScreen = () => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <MenuApp.Default />

        <View
          style={{
            position: 'absolute',
            top: 20,
            zIndex: 1,
          }}>
          <Image source={Images.type1} />
        </View>

        <View
          style={{
            width: '90%',
            backgroundColor: colors.primaryColor,
            borderRadius: 30,
            marginTop: 20,
            paddingTop: 40,
            flex: 1,
          }}>
          <TouchableOpacity>
            <Image
              source={Images.whiteUpArrow}
              style={{width: 20, height: 20, paddingHorizontal: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: colors.mainColorLight,
              width: '100%',
            }}>
            <TextApp.Default
              color={colors.mainColorLight}
              fontSize={16}
              value="Detalles del Servicio"
            />
            <Image
              source={Images.whiteDownArrowV2}
              style={{width: 15, height: 15}}
              resizeMode="contain"
            />
          </View>

          <ItemDetail
            icon={Images.offi}
            text="Catalina Aldaz y portugal, Edificio La Recoleta"
            background
          />
          <ItemDetail
            icon={Images.calendar}
            background
            text="Lunes 3 ene. 2020"
            endText="Cambiar"
          />
          <ItemDetail icon={Images.normalCleaning} text="Limpieza Normal" />
          <ItemDetail icon={Images.service} text="Servicio Única vez" />
          <ItemDetail
            icon={Images.user}
            endText="Cambiar"
            text={`$ 28.00\nVisa8181`}
          />
          <ItemDetail
            icon={Images.gif}
            endText="Lo quiero"
            background
            text="¿Limpieza gratis?"
          />

          <View
            style={{
              alignSelf: 'center',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
              width: '90%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <ImageUserProfile
                isVerified={true}
                imageUrl="https://i.ibb.co/V9GYV8r/Recurso-1.png"
                size={64}
                fullRounded={true}
                borderThickness={3}
                outlineColor={colors.secondaryColor}
              />
              <View style={{marginLeft: 10}}>
                <TextApp.Default
                  color={colors.mainColorLight}
                  value="Roberta Sanchez (4.89 X)"
                  fontSize={14}
                  fontWeight="bold"
                />
                <TextApp.Default
                  color={colors.mainColorLight}
                  value="55 servicios realizados"
                  fontSize={10}
                />
                <TextApp.Default
                  color={colors.mainColorLight}
                  value="CI:17xxxxxx04"
                  fontSize={13}
                  fontWeight="bold"
                />
              </View>
            </View>
            <Image
              source={Images.phone}
              style={{width: 30, height: 50}}
              resizeMode="contain"
            />
          </View>
          <FlatList
            data={[
              {
                title: 'Plus',
                subtitle:
                  'Nuestra colaboradora realizó más de 200 servicios de 5 estrellas.',
                icon: Images.service,
                backgroundColor: colors.secondaryColor,
              },
              {
                title: 'Destacados',
                subtitle:
                  'Nuestra colaboradora realizó estos reconocimientos: 33 excelente servicio.',
                icon: Images.excelentservice3,
                backgroundColor: colors.tertiaryColor,
              },
            ]}
            horizontal
            renderItem={({item}) => (
              <Card
                backgroundColor={item.backgroundColor}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            )}
          />

          <TouchableOpacity
            style={{
              backgroundColor: colors.mainColorLight,
              paddingVertical: 10,
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              marginTop: 20,
              alignItems: 'center',
            }}>
            <TextApp.Default color="red" value="Cancelar" fontSize={14} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AcceptedServiceScreen;
