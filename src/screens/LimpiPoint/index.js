import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Image } from 'react-native'
import { Icon, Input, Tab, TabView } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const LimpiPointScreen = ({ navigation }) => {



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
                        source={require('../../assets/images/Global/limp1.png')}
                        resizeMode="contain" />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 50, textAlign: 'center', fontWeight: 'bold', paddingRight: 20 }}>1000</Text>

                </View>
                <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: '#68c530', marginTop: 10, borderRadius: 15, width: '50%', height: 35, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        onPress={() => navigation.navigate('LoadingLimpiPoint')}
                        style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        Canjear
                    </Text>

                </View>

                <View style={styles.card}  >
                    <Image
                        style={{ height: 55, width: 75, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../assets/images/Global/limp2.png')}
                        resizeMode="contain" />
                    <Text style={{ textAlign: 'center', color: '#5f2490', fontWeight: 'bold', fontSize: 30 }}>
                        Gana
                    </Text>

                    <Text style={{ textAlign: 'center', color: '#5f2490', fontSize: 20 }}>
                        100 Limpipuntos
                    </Text>

                    <View style={{ borderWidth: 1, width: '40%', alignSelf: 'center', marginTop: 10, borderStyle: 'dotted', borderRadius: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#767676' }}>
                            Impz2011284901
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, backgroundColor: '#5f2490', marginTop: 30, borderRadius: 15, width: '50%', height: 35, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                            Comparte
                        </Text>
                        <Icon

                            name='share-social-sharp'
                            type='ionicon'
                            color='white'
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon
                            name='help-circle-outline'
                            type='ionicon'
                            color='#767676'
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#767676' }}>
                            ¿Cómo Funciona?
                        </Text>
                    </View>
                    <Text style={{ fontSize: 14, color: '#767676', textAlign: 'center', padding: 20 }}>
                        Cada Limpipuntos equivale a 0.010 ctvs de dólar y hace que los servicios
                        que contrates no se queden solamente en servicios, más veces contratas el
                        servicio más puntos ganas, y gracias a ello tendrás los mejores descuentos
                        y regalos en diferentes establecimientos comerciales.
                    </Text>
                    <Text style={{ fontSize: 14, color: '#767676', textAlign: 'center', padding: 10 }}>
                        *Aplican restricciones
                    </Text>
                </View>

            </View>
        </ScrollView >


    )
}

export default LimpiPointScreen