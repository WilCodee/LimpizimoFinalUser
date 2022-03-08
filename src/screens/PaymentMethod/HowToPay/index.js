import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const HowToPayScreen = ({ navigation }) => {
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
                    source={require('../../../assets/images/Global/card.png')}
                    resizeMode="contain" />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>¿Cómo prefieres pagar?</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Elige tu forma preferida de pago</Text>


                <View style={styles.card}  >


                    <View style={{ backgroundColor: '#ECEDEE', width: '80%', height: '8%', alignSelf: 'center', borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 40, width: 40, marginRight: 10, marginLeft: 20 }}
                            source={require('../../../assets/images/Global/creditcard.png')}
                            resizeMode="contain" />
                        <Text style={{ textAlign: 'center', color: '#767676', fontSize: 14, marginRight: 4 }}
                            onPress={() => navigation.navigate('CreditCard')}>
                            Tarjeta de crédito o débito
                        </Text>
                        <Icon
                            style={{}}
                            onPress={() => navigation.navigate('Home')}
                            name='arrow-forward-outline'
                            type='ionicon'
                            color='#767676'
                        />
                    </View>
                    <View style={{ backgroundColor: '#ECEDEE', width: '80%', height: '8%', alignSelf: 'center', borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 25, width: 25, marginRight: 18, marginLeft: 30 }}
                            source={require('../../../assets/images/Global/paypal.png')}
                            resizeMode="contain" />
                        <Text style={{ textAlign: 'center', color: '#767676', fontSize: 14, marginRight: 120 }}
                            onPress={() => navigation.navigate('')}>
                            Paypal
                        </Text>

                        <Icon

                            onPress={() => navigation.navigate('Home')}
                            name='arrow-forward-outline'
                            type='ionicon'
                            color='#767676'
                        />

                    </View>

                </View>

            </View>
        </ScrollView >


    )
}

export default HowToPayScreen