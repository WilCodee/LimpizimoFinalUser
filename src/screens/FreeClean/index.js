import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Image } from 'react-native'
import { Icon, Input, Tab, TabView } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const FreeCleanScreen = ({ navigation }) => {



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
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Gana U$D 5 dólares</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12, textAlign: 'center', paddingLeft: 30, paddingRight: 30, marginTop: 10 }}>Puedes recibir U$D 5 dólares por cada persona que realice su primer servicio y regálale U$D 5 dólares para su primer servicio.</Text>


                <View style={styles.card}  >
                    <Image
                        style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../assets/images/Global/gif.png')}
                        resizeMode="contain" />
                    <Text style={{ textAlign: 'center', color: '#5f2490' }}>
                        Términos y condiciones
                    </Text>

                    <Text style={{ textAlign: 'center', color: '#767676', marginTop: 20 }}>
                        Comparte este código

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

                </View>

            </View>
        </ScrollView >


    )
}

export default FreeCleanScreen