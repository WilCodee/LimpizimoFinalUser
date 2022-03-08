import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const PaymentMethodScreen = ({ navigation }) => {
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
                    style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, tintColor: 'white' }}
                    source={require('../../assets/images/Global/card.png')}
                    resizeMode="contain" />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Agregar una nueva tarjeta</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Ingrese la tarjeta de crédito o débito</Text>


                <View style={styles.card}  >


                    <View style={{ backgroundColor: '#5f2490', width: '80%', height: '8%', alignSelf: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            size={20}
                            name='add-circle'
                            type='ionicon'
                            color='white'
                        />
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => navigation.navigate('HowToPay')}>
                            Añadir nuevo
                        </Text>
                    </View>

                </View>

            </View>
        </ScrollView >


    )
}

export default PaymentMethodScreen