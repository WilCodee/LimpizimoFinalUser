import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Image } from 'react-native'
import { Icon, Input, Tab, TabView } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const CouponScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);

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
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Ingrese su código de cupón</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12, textAlign: 'center', paddingLeft: 30, paddingRight: 30 }}>Puedes ingresar el código de cupón que será otorgado por nuestros medios de comunicación, push, redes sociales, etc.</Text>


                <View style={styles.card}  >
                    <Image
                        style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../assets/images/Global/coupon.png')}
                        resizeMode="contain" />
                    <Text style={{ textAlign: 'center', fontSize: 12, color: '#5f2490' }}>
                        Términos y condiciones
                    </Text>

                    <Input
                        style={{ textAlign: 'center', paddingBottom: 0 }}
                        placeholder='Escribe tu código aqui'

                    />
                    <View style={{ marginBottom: 20, backgroundColor: '#5f2490', marginTop: 10, marginLeft: 18, borderRadius: 15, width: '50%', height: 35, justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                            Canjear
                        </Text>
                    </View>
                    <Tab indicatorStyle={{ backgroundColor: '#5f2490' }} value={index} onChange={setIndex}>
                        <Tab.Item containerStyle={{ backgroundColor: 'white' }} titleStyle={{ color: '#767676' }} title="Disponibles" />
                        <Tab.Item containerStyle={{ backgroundColor: 'white' }} titleStyle={{ color: '#767676' }} title="Vencidos" />

                    </Tab>

                    <TabView value={index} onChange={setIndex} >
                        <TabView.Item style={{ width: '100%' }}>
                            <Text h1>Disponibles</Text>
                        </TabView.Item>
                        <TabView.Item style={{ width: '100%' }}>
                            <Text h1>Vencidos</Text>
                        </TabView.Item>

                    </TabView>
                </View>

            </View>
        </ScrollView >


    )
}

export default CouponScreen