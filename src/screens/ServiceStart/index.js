import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Images from '../../assets/images/';
import FastImage from 'react-native-fast-image';
import Touchable from 'react-native-platform-touchable';
import { Divider } from 'react-native-elements'
import SwipeButton from 'rn-swipe-button';

const ServiceStartScreen = ({ props, navigation }) => {

    // const renderSwipeButton = () => (<SwipeButton />)


    const _onPhoneImagePress = () => {
        const phoneNumber = Platform.OS === 'ios' ? `telprompt:\${${assignedEmployee.telefono}}` : `tel:\${${assignedEmployee.telefono}}`;
        Linking.openURL(phoneNumber);
    };
    const assignedEmployee = {
        nombre: 'Roberta ',
        apellidos: 'Sanchez',
        telefono: '3794202020',
        imagenPerfil: 'https://i.ibb.co/V9GYV8r/Recurso-1.png',
        calificacionPro: '4.89',
        fechaInicio: '17/07/2021',
        callePrincipal: 'Avenida 3 de abril y Buenos Aires'

    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('Home')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>

                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 28 }}>Hola Ricardo!</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>El servicio está por empezar</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 14 }}>La colaboradora asignada es:</Text>



                <View style={styles.card}  >
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
                        <View style={styles.employeeImageContainer}>
                            <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
                            <FastImage style={styles.employeeImage} source={{ uri: assignedEmployee.imagenPerfil }} resizeMode={FastImage.resizeMode.cover} />
                            <Text style={styles.employeeRating}>
                                {`(${assignedEmployee.calificacionPro} `}
                                <Text style={styles.star}>{'\u2605'}</Text>)
                            </Text>
                        </View>

                        <View style={{ marginLeft: 50 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{assignedEmployee.nombre}</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{assignedEmployee.apellidos}</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={{ backgroundColor: '#73BF43', width: 170, borderRadius: 50, textAlign: 'center', color: 'white' }}>
                                    55 servicios realizados
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                    <Image source={Images.mapa} style={{
                                        tintColor: 'white', width: 24,
                                        height: 24,
                                    }} resizeMode="contain" />
                                    <Text style={{ color: 'white' }}>
                                        {assignedEmployee.callePrincipal}

                                    </Text>
                                </View>
                                <Text style={{ backgroundColor: '#73BF43', width: 80, borderRadius: 50, textAlign: 'center', color: 'white', marginTop: 5 }}>
                                    Trabajo
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Touchable style={styles.phoneImageContainer} onPress={_onPhoneImagePress}>
                                    <Image style={styles.phoneImage} source={Images.phone} resizeMode="contain" />
                                </Touchable>
                                <Text style={{ color: 'white', paddingTop: 10 }}>Llamar</Text>

                                <Touchable style={styles.phoneImageContainer} onPress={_onPhoneImagePress}>
                                    <Image style={styles.phoneImage} source={Images.msg} resizeMode="contain" />
                                </Touchable>
                                <Text style={{ color: 'white', paddingTop: 10 }}>Chatear</Text>
                            </View>
                        </View>
                    </View>
                    <Divider
                        style={{ width: `100%`, marginTop: 10 }}
                        orientation="horizontal"
                        width={1}
                        height={0}
                    />
                    <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                            Información del servicio
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}><Image style={{ tintColor: 'white', width: 20, height: 20 }} source={Images.calendar} resizeMode="contain" /><Text style={{ color: 'white', marginLeft: 5, fontSize: 16 }}>Lunes 3 ene.2020</Text></View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}><Image style={{ tintColor: 'white', width: 20, height: 20 }} source={Images.clock} resizeMode="contain" /><Text style={{ color: 'white', marginLeft: 5, fontSize: 16 }}>8:00am a 12:00pm</Text></View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}><Image style={{ tintColor: 'white', width: 20, height: 20 }} source={Images.service} resizeMode="contain" /><Text style={{ color: 'white', marginLeft: 5, fontSize: 16 }}>Servicio única vez</Text></View>
                        <Image style={{ width: 70, height: 70, margin: 10 }} source={Images.greenNormalCleaning} resizeMode="contain" />
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>LIMPIEZA NORMAL</Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Indicaciones</Text>
                        <Text style={{ color: 'white', textAlign: 'center', borderWidth: 1, borderRadius: 50, margin: 10, borderColor: 'white', padding: 10 }}>La ubicacion tiene como referencia arriba de la embajada americana, no timbrar más de una vez. Muchas gracias</Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18, width: 200 }}>DESLIZA PARA EMPEZAR EL SERVICIO</Text>
                        <SwipeButton
                            titleColor
                            onSwipeSuccess={() => alert('Slide success!')}
                            titleStyles={{ fontWeight: 'bold', paddingLeft: 40 }}
                            titleColor='white'
                            title={'EMPEZAR'}
                            height={65}
                            width={220}
                            thumbIconBackgroundColor={'white'}
                            railFillBackgroundColor={'#73BF43'}
                            railBackgroundColor={'#3eaee7'} />

                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default ServiceStartScreen