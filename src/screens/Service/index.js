import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const Service = ({ navigation }) => {
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

                <Image
                    style={{ height: 50, width: 35, tintColor: '#fff' }}
                    source={require('../../../App/assets/images/Global/service.png')}
                    resizeMode="contain" />

                <Text style={styles.title}>Revisa el detalle de cada servicio</Text>
                <Text style={styles.subTitle}>Conoce las características de cada servicio</Text>

                <View style={styles.card}>
                    <Text style={styles.home}>Casas</Text>
                    <Image
                        style={{ height: 45, width: 85, alignSelf: 'center' }}
                        source={require('../../assets/images/Global/house1.png')}
                        resizeMode="contain" />
                    <Text style={{
                        alignSelf: 'center', textAlign: 'center', fontSize: 12, padding: 10, color: '#767676', fontWeight: 'bold'
                    }}
                    >Catalogamos los tamaños según los espacios de cada casa, y en función a eso las horas mínimas de servicio para cada tamaño</Text>

                    <View style={{ flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '80%' }}>
                        <View>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={require('../../assets/images/Global/type1.png')}
                                resizeMode="contain" />

                        </View>

                        <View>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={require('../../assets/images/Global/type1.png')}
                                resizeMode="contain" />

                        </View>
                        <View>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={require('../../assets/images/Global/type1.png')}
                                resizeMode="contain" />

                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '80%' }}>
                        <View>
                            <Text style={styles.sizeClean}>Pequeña</Text>
                            <Text style={styles.hoursClean}>Minimo 2hrs</Text>
                        </View>
                        <View>
                            <Text style={styles.sizeClean}>Mediana</Text>
                            <Text style={styles.hoursClean}>Mínimo 4hrs</Text>
                        </View>
                        <View>
                            <Text style={styles.sizeClean}>Grande</Text>
                            <Text style={styles.hoursClean}>Mínimo 6hrs</Text>
                        </View>
                    </View>





                    <Text style={styles.home}>Tipos de Limpieza</Text>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: 42,
                            borderRadius: 60,
                            backgroundColor: '#5f2490',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            marginTop: 0,
                            width: '80%',
                            marginBottom: 5,
                        }}
                        onPress={() => navigation.navigate('NormalClean')}
                    >
                        <Image
                            style={{ height: 30, width: 25, tintColor: 'white' }}
                            source={require('../../assets/images/Global/normalCleaning.png')}
                            resizeMode="contain" />
                        <Text
                            style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                            Limpieza Normal
                        </Text>
                        <Icon
                            name='chevron-forward'
                            type='ionicon'
                            color='white'
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: 42,
                            borderRadius: 60,
                            backgroundColor: '#5f2490',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            marginTop: 0,

                            width: '80%',
                        }}
                        onPress={() => navigation.navigate('DeepClean')}
                    >
                        <Image
                            style={{ height: 30, width: 25, tintColor: 'white' }}
                            source={require('../../assets/images/Global/deepCleaning.png')}
                            resizeMode="contain" />
                        <Text
                            style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                            Limpieza Profunda
                        </Text>
                        <Icon
                            name='chevron-forward'
                            type='ionicon'
                            color='white'
                        />

                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', height: 200, marginTop: 10, padding: 10 }}>
                        <View style={{ flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                            <Text style={{ color: '#5f2490', fontSize: 18 }}>
                                Oficina
                            </Text>
                            <Text style={{ textAlign: 'center', color: '#767676', fontSize: 10, fontWeight: 'bold', padding: 5 }}>
                                Estimamos un tiempo mínimo en el que la colaboradora debe realizar sus tareas en una oficina.
                            </Text>
                            <Image
                                style={{ height: 120, width: 120 }}
                                source={require('../../assets/images/Global/offi.png')}
                                resizeMode="contain" />

                        </View>
                        <View style={{ width: '50%', alignItems: 'center' }}>
                            <Text style={{ color: '#5f2490', fontSize: 18 }}>
                                Otro
                            </Text>
                            <Text style={{ textAlign: 'center', color: '#767676', fontSize: 10, fontWeight: 'bold', padding: 5 }}>
                                Estimamos un tiempo mínimo que la colaboradora debe realizar sus tareas en otro espacio a contratar, como áreas sociales, eventos, etc.
                            </Text>
                            <Image
                                style={{ height: 90, width: 90, marginTop: 25 }}
                                source={require('../../assets/images/Global/otherPlace1.png')}
                                resizeMode="contain" />

                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '70%', marginBottom: 15, marginTop: 10 }}>
                        <Text style={{
                            paddingTop: 2,
                            fontWeight: 'bold',
                            fontSize: 11,
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: 60,
                            height: 20,
                            backgroundColor: '#68c530',
                            width: '35%'
                        }}>Minimo 2hrs</Text>
                        <Text style={{
                            paddingTop: 2,
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 11,
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: 60,
                            height: 20,
                            backgroundColor: '#68c530',
                            width: '35%'
                        }}>Mínimo 2hrs</Text>


                    </View>

                </View>
            </View>
        </ScrollView>


    )
}

export default Service