import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Image, Alert } from 'react-native'
import { Icon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ModalTester from '../Modal/Modal';


const CardDetail = () => {
    return (
        <View style={{ height: 190, width: 372, alignSelf: 'center', marginTop: 25, backgroundColor: '#5f2490' }}>
            <Icon
                containerStyle={{ paddingTop: 20 }}

                name='chevron-back-outline'
                type='ionicon'
                color='white'
                size={40}
            />
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', marginBottom: 15 }}>Hamburguesa con Queso y Tocino</Text>

            <View style={{ flexDirection: 'row', paddingLeft: 60, paddingRight: 10, width: '75%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 5 }}>
                    Incluye:
                </Text>
                <Text style={{ color: 'white' }}>
                    1 Bebida, 1 hamburguesa con queso y tocino, tamaño mediana y una papa frita pequeña
                </Text>
            </View>
        </View >
    );
}


const LoadedLimpiPoint = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isDetailVisible, setDetailVisible] = useState(false);
    const toggleDetail = () => {
        setDetailVisible(!isDetailVisible)
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
                    style={{ color: 'white', alignSelf: 'center', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Haz obtenido limpipuntos:</Text>
                <View style={{ flexDirection: 'row' }}  >

                    <Image
                        style={{ height: 20, width: 25, alignSelf: 'center', marginBottom: 15 }}
                        source={require('../../../../assets/images/Global/limp1.png')}
                        resizeMode="contain" />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 50, textAlign: 'center', fontWeight: 'bold', paddingRight: 20 }}>1000</Text>

                </View>
                <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: '#73BF43', marginTop: 10, borderRadius: 15, width: '50%', height: 35, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        onPress={() => navigation.navigate('LoadingLimpiPoint')}
                        style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        Canjear
                    </Text>

                </View>

                <View style={styles.card}  >
                    {isDetailVisible ? <CardDetail /> : <Image
                        style={{ height: 190, width: 375, alignSelf: 'center', marginTop: 25 }}
                        source={require('../../../../assets/images/Global/burgerking.png')}
                        resizeMode="contain" />}

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button
                            onPress={toggleDetail}
                            buttonStyle={{
                                backgroundColor: '#00AAE3',
                                borderRadius: 0,
                            }}
                            title={'Detalles'}
                            containerStyle={{
                                width: 186,
                                borderRadius: 0,
                                marginTop: 0
                            }}
                        />
                        <ModalTester />

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 19 }}>
                        <Text style={{ color: '#767676', fontWeight: 'bold', fontSize: 18 }}>
                            Burger King
                        </Text>
                        <Text style={{ color: '#767676', fontSize: 14 }}>
                            - Av.Amazonas
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 19, alignItems: 'center' }}>
                        <Text style={{ color: '#767676', fontSize: 14 }}>
                            Restaurante - Salida con amigos - $
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 19, alignItems: 'center' }}>
                        <Icon

                            name='star-sharp'
                            type='ionicon'
                            color='#DB185D'
                        />
                        <Text style={{ color: '#767676', fontSize: 14, marginLeft: 5, marginRight: 5 }}>
                            4,6(50+)
                        </Text>
                        <Icon
                            onPress={() => navigation.navigate('Home')}
                            name='ellipse-sharp'
                            type='ionicon'
                            color='#42A848'
                        />
                        <Text style={{ color: '#767676', fontSize: 14 }}>
                            Abierto
                        </Text>
                    </View>
                    <Image
                        style={{ height: 190, width: 375, alignSelf: 'center', marginTop: 25 }}
                        source={require('../../../../assets/images/Global/burgerking.png')}
                        resizeMode="contain" />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button

                            buttonStyle={{
                                backgroundColor: '#00AAE3',
                                borderRadius: 0,
                            }}
                            title={'Detalles'}
                            containerStyle={{
                                width: 186,
                                borderRadius: 0,
                                marginTop: 0
                            }}
                        />
                        <ModalTester />

                    </View>
                </View>
            </View>
        </ScrollView >


    )
}

export default LoadedLimpiPoint