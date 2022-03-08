import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Input } from 'react-native-elements';



const CreditCard = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('PaymentMethod')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                <Image
                    style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, tintColor: 'white' }}
                    source={require('../../../../../assets/images/Global/card.png')}
                    resizeMode="contain" />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Añadir una nueva tarjeta</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>ingrese la tarjeta con los datos correctos</Text>


                <View style={styles.card}>
                    <Text style={{ paddingTop: 20, paddingLeft: 15, color: '#ADAEAD', fontWeight: 'bold' }}>
                        NÚMERO DE LA TARJETA
                    </Text>
                    <View style={{ flexDirection: 'row', width: '86%' }}>

                        <Image
                            style={{ height: 60, width: 35, marginLeft: 15 }}
                            source={require('../../../../../assets/images/Global/creditcard.png')}
                            resizeMode="contain" />
                        <Input
                            fontSize={13}
                            keyboardType='number-pad'
                            placeholder='XXXX XXXX XXXX XXXX'
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', width: '50%' }}>
                            <Text style={{ paddingLeft: 15, color: '#ADAEAD', fontWeight: 'bold' }}>
                                FECHA MM/AA
                            </Text>
                            <Input
                                height={0}
                                fontSize={13}
                                keyboardType='number-pad'
                                placeholder='MM/AA'
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%' }}>
                            <Text style={{ paddingLeft: 14, color: '#ADAEAD', fontWeight: 'bold' }}>
                                CVC/CVV
                            </Text>
                            <Input
                                height={0}
                                fontSize={13}
                                keyboardType='number-pad'
                                placeholder='XXX'
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', height: 20 }}>
                        <View style={{ flexDirection: 'column', width: '50%' }}>
                            <Text style={{ paddingLeft: 14, color: '#ADAEAD', fontWeight: 'bold' }}>
                                NOMBRE
                            </Text>
                            <Input
                                height={0}
                                fontSize={13}
                                placeholder='NOMBRE EN LA TARJETA'
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', }}>
                            <Text style={{ paddingLeft: 14, color: '#ADAEAD', fontWeight: 'bold' }}>
                                APELLIDO
                            </Text>
                            <Input

                                height={0}
                                fontSize={13}
                                placeholder='APELLIDO'
                            />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 80 }}>

                        <Image
                            style={{ height: 60, width: 55 }}
                            source={require('../../../../../assets/images/Global/shield.png')}
                            resizeMode="contain" />
                        <Text style={{ color: '#767676', fontWeight: 'bold', marginTop: 10 }}>
                            Vamos a verificar tu Tarjeta de Crédito
                        </Text>
                        <Text style={{ color: '#767676', padding: 20, textAlign: 'center', paddingTop: 10 }}>
                            Por seguridad, te cobraremos un monto aleatorio de menos 1,0 para verificar
                            que la tarjeta sea valida, el mismo que será reembolado inmediatamente.
                        </Text>

                        <View style={{ backgroundColor: '#5f2490', width: '80%', height: '15%', width: '50%', justifyContent: 'center', borderRadius: 20 }}>

                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18, }}
                                onPress={() => navigation.navigate('SelectCard')}>
                                Agregar
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default CreditCard