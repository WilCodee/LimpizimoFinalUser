import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const HelpScreen = ({ navigation }) => {
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
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>¿Cómo te ayudamos?</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Seleccione la consulta</Text>


                <View style={styles.card}  >

                    <View style={{ backgroundColor: '#ECEDEE', width: '80%', height: '8%', alignSelf: 'center', borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 30, width: 30, marginRight: 10, marginLeft: 20 }}
                            source={require('../../assets/images/Global/service2.png')}
                            resizeMode="contain" />
                        <Text style={{ color: '#767676', fontSize: 12, marginRight: 4 }}
                            onPress={() => navigation.navigate('ServiceProblem')}>
                            Problemas con el servicio o tarifas
                        </Text>
                        <Icon
                            style={{}}
                            onPress={() => navigation.navigate('ServiceProblem')}
                            name='arrow-forward-outline'
                            type='ionicon'
                            color='#767676'
                        />
                    </View>
                    <View style={{ backgroundColor: '#ECEDEE', width: '80%', height: '8%', alignSelf: 'center', borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ marginLeft: 20, marginRight: 17 }}
                            name='person-outline'
                            type='ionicon'
                            color='#767676'
                        />
                        <Text style={{ textAlign: 'center', color: '#767676', fontSize: 12, marginRight: 21 }}
                            onPress={() => navigation.navigate('')}>
                            Problemas con la colaboradora
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

export default HelpScreen