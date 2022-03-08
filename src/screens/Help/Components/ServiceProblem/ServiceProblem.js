import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const ServiceProblem = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('Help')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                {/* <Image
                    style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, tintColor: 'white' }}
                    source={require('../../../assets/images/Global/card.png')}
                    resizeMode="contain" /> */}
                <Icon
                    size={40}
                    name='help-buoy-outline'
                    type='ionicon'
                    color='white' />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Problemas con el servicio o tarifas</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Seleccione la consulta</Text>


                <View style={styles.card}  >
                    <View style={{ backgroundColor: '#5f2490', marginTop: 25, marginLeft: 18, borderRadius: 13, width: '90%', height: 35, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', paddingLeft: 20 }}>
                            Devoluciones
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#5f2490', marginTop: 10, marginLeft: 18, borderRadius: 13, width: '90%', height: 35, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', paddingLeft: 20 }}>
                            Tarifa cobrada dos veces
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#5f2490', marginTop: 10, marginLeft: 18, borderRadius: 13, width: '90%', height: 35, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', paddingLeft: 20 }}>
                            Problemas con un cobro
                        </Text>
                    </View>

                </View>

            </View>
        </ScrollView >


    )
}

export default ServiceProblem