import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, Button } from 'react-native'
import { Header, Icon, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Modal from "react-native-modal";

const DetailService = ({ navigation }) => {
    const [isModalVisibleSelect, setModalVisibleSelect] = useState(false);
    const [isModalVisibleExtra, setModalVisibleExtra] = useState(false);

    const toggleModalSelect = () => {
        setModalVisibleSelect(!isModalVisibleSelect)
    }
    const toggleModalExtra = () => {
        setModalVisibleExtra(!isModalVisibleExtra)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('HistoryService')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                <Icon
                    size={60}
                    name='newspaper-outline'
                    type='ionicon'
                    color='white'
                />
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Detalles del servicios</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Revisa el detalle del servicios realizados</Text>

                <View style={styles.card}>
                    <Modal isVisible={isModalVisibleSelect}>
                        <View style={{ backgroundColor: 'white', justifyContent: 'center', height: '30%', borderRadius: 20 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#5f2490', fontSize: 18, paddingBottom: 10 }}>Horas seleccionadas</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12, paddingLeft: 10, paddingRight: 10 }}>Son las horas que el usuario selecciona al momento de realizar el pedido, estas horas están
                                predeterminadas en función al espacio de su casa, oficina y otro lugar seleccionado.</Text>

                            <Text
                                style={{ alignSelf: 'center', fontWeight: 'bold', color: '#5f2490', fontSize: 20, marginTop: 10 }}
                                onPress={toggleModalSelect}>
                                OK
                            </Text>

                        </View>
                    </Modal>

                    <Modal isVisible={isModalVisibleExtra}>
                        <View style={{ backgroundColor: 'white', justifyContent: 'center', height: '30%', borderRadius: 20 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#5f2490', fontSize: 18, paddingBottom: 10 }}>Horas extras</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12, paddingLeft: 10, paddingRight: 10 }}>Son las horas que el usuario solicita adicionales para poder terminar los lab ores en su casa, oficina u otro lugar seleccionado.
                                Estas horas son previamente indicadas por la colaboradora y aceptadas por el usuario.</Text>

                            <Text
                                style={{ alignSelf: 'center', fontWeight: 'bold', color: '#5f2490', fontSize: 20, marginTop: 10 }}
                                onPress={toggleModalExtra}>
                                OK
                            </Text>

                        </View>
                    </Modal>

                    <Text style={{ color: '#767676', textAlign: 'left', fontWeight: 'bold', fontSize: 16, marginTop: 20, paddingLeft: 40 }}>1/13/20 8:00am a 11am</Text>
                    <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
                        <Avatar
                            size={45}
                            rounded
                            source={{
                                uri:
                                    'https://cdn.iconscout.com/icon/free/png-64/avatar-369-456321.png'
                            }}
                        />
                        <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                            <Text style={{ color: '#767676', textAlign: 'left', fontSize: 12, marginTop: 10, fontWeight: 'bold' }}>Roberta Sanchez</Text>
                            <Text style={{ color: '#767676', textAlign: 'left', fontSize: 12, borderWidth: 1, borderRadius: 50, paddingLeft: 5, borderColor: '#767676' }}>ID: 17xxxxxx04</Text>
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 60 }}>
                            <Text style={{ color: '#767676', textAlign: 'left', fontSize: 12, marginTop: 10 }}>U$D 28.00</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    size={15}
                                    name='star'
                                    type='ionicon'
                                    color='#767676'
                                />
                                <Icon
                                    size={15}
                                    name='star'
                                    type='ionicon'
                                    color='#767676'
                                />
                                <Icon
                                    size={15}
                                    name='star'
                                    type='ionicon'
                                    color='#767676'
                                />
                                <Icon
                                    size={15}
                                    name='star'
                                    type='ionicon'
                                    color='#767676'
                                />
                                <Icon
                                    size={15}
                                    name='star'
                                    type='ionicon'
                                    color='#767676'
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: '#767676', textAlign: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 12 }}>
                        El servicio fue realizado en la siguiente dirección
                    </Text>

                    <View style={{ borderRadius: 50, borderWidth: 1, borderColor: '#5f2490', flexDirection: 'row', width: '80%', alignSelf: 'center', marginTop: 10 }}>
                        <Image
                            style={{
                                marginLeft: 80,
                                justifyContent: 'center',
                                width: 20,
                                height: 40,

                            }}
                            source={require('../../../../assets/images/Global/offi.png')}
                            resizeMode="contain" />

                        <View style={{ flexDirection: 'column', paddingLeft: 20 }}>
                            <Text style={{ color: '#5f2490', fontWeight: 'bold' }}>
                                Trabajo
                            </Text>
                            <Text style={{ color: '#5f2490' }}>
                                Catalina Aldaz,Quito
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 50, borderWidth: 1, borderColor: '#5f2490', flexDirection: 'row', width: '40%', alignSelf: 'center', marginTop: 10, justifyContent: 'center' }}>


                        <Text style={{ color: '#5f2490', textAlign: 'center', marginRight: 5 }}>
                            Servicio
                        </Text>
                        <Text style={{ color: '#5f2490', fontWeight: 'bold', textAlign: 'center' }}>
                            Única vez
                        </Text>
                    </View>

                    <Text style={{ color: '#767676', textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>
                        El servicio que elegiste fue:
                    </Text>

                    <View style={{ borderColor: '#5f2490', borderWidth: 3, width: 80, height: 80, alignSelf: 'center', borderRadius: 100, marginTop: 10 }}>
                        <Image
                            style={{
                                marginTop: 15,
                                justifyContent: 'center',
                                width: 60,
                                height: 50,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                tintColor: '#5f2490'

                            }}
                            source={require('../../../../assets/images/Global/normalCleaning.png')}
                            resizeMode="contain" />
                    </View>
                    <Text style={{ color: '#5f2490', textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>
                        LIMPIEZA NORMAL
                    </Text>
                    <Text style={{ color: '#767676', textAlign: 'center', marginTop: 5, }}>
                        Horas seleccionadas
                    </Text>

                    <View style={{ borderRadius: 50, borderWidth: 1, borderColor: '#5f2490', flexDirection: 'row', width: '40%', alignSelf: 'center', marginTop: 2, justifyContent: 'space-around' }}>
                        <Icon
                            style={{}}
                            name='alarm-outline'
                            type='ionicon'
                            color='#5f2490'
                            size={20}
                        />
                        <Text style={{ color: '#5f2490', fontWeight: 'bold' }}>
                            +4 horas
                        </Text>
                        <Icon
                            style={{}}
                            onPress={toggleModalSelect}
                            name='alert-circle'
                            type='ionicon'
                            color='#5f2490'
                            size={20}
                        />
                    </View>

                    <Text style={{ color: '#767676', textAlign: 'center', marginTop: 2, }}>
                        Horas extras
                    </Text>

                    <View style={{ borderRadius: 50, borderWidth: 1, borderColor: '#5f2490', flexDirection: 'row', width: '40%', alignSelf: 'center', marginTop: 2, justifyContent: 'space-around' }}>
                        <Icon
                            style={{}}
                            name='alarm-outline'
                            type='ionicon'
                            color='#5f2490'
                            size={20}
                        />
                        <Text style={{ color: '#5f2490', fontWeight: 'bold' }}>
                            +1 horas
                        </Text>
                        <Icon
                            style={{}}
                            onPress={toggleModalExtra}
                            name='alert-circle'
                            type='ionicon'
                            color='#5f2490'
                            size={20}
                        />
                    </View>
                    <View>
                        <View style={{ color: '#767676', flexDirection: 'row', borderBottomWidth: 1, marginRight: 10, alignSelf: 'center', width: '90%', marginTop: 15, borderColor: '#767676' }}>
                            <Text style={{ color: '#767676', }}>
                                Valor del servicio
                            </Text>
                        </View>
                        <View style={{ color: '#767676', flexDirection: 'row' }}>

                            <Text style={{ color: '#767676', flexDirection: 'row', marginLeft: 13, fontSize: 12, }}>
                                Valor base por hora
                            </Text>
                            <Text style={{ color: '#767676', marginLeft: 45, fontSize: 12, }}>
                                U$D 7,00
                            </Text>
                            <Text style={{ color: '#767676', marginLeft: 30, fontSize: 12, }}>
                                x5
                            </Text>
                            <Text style={{ color: '#767676', marginLeft: 30, fontSize: 12, }}>
                                U$D 35,00
                            </Text>
                        </View>
                        <View style={{ color: '#767676', flexDirection: 'row' }}>

                            <Text style={{ color: '#767676', marginLeft: 13, fontSize: 12, }}>
                                Tasa del servicio y seguridad
                            </Text>

                            <Text style={{ color: '#767676', marginLeft: 116, fontSize: 12, }}>
                                U$D 0,15
                            </Text>
                        </View>
                        <View style={{ color: '#767676', flexDirection: 'row', marginLeft: 13, fontSize: 12, }}>

                            <Text style={{ color: '#767676', fontSize: 12 }}>
                                Fin de semana
                            </Text>

                            <Text style={{ color: '#767676', fontSize: 12, marginLeft: 192 }}>
                                U$D 0,50
                            </Text>
                        </View>
                        <View style={{ color: '#767676', flexDirection: 'row', marginLeft: 13, fontSize: 12 }}>

                            <Text style={{ color: '#767676', fontSize: 12, fontWeight: 'bold' }}>
                                Valor total
                            </Text>

                            <Text style={{ color: '#767676', fontSize: 12, marginLeft: 215, fontWeight: 'bold' }}>
                                U$D 36,65
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 20, borderWidth: 1, borderColor: '#5f2490', flexDirection: 'row', width: '42%', height: '5%', alignSelf: 'center', marginTop: 70, justifyContent: 'center' }}>

                        <Text style={{ color: '#5f2490', fontWeight: 'bold', fontSize: 12, alignSelf: 'center' }}>
                            Reportar un problema
                        </Text>

                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default DetailService