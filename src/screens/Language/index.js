import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import CheckBox from '@react-native-community/checkbox';

const LanguageScreen = ({ navigation }) => {

    const [toggleEnglish, setToggleEnglish] = useState(false)
    const [toggleSpanish, setToggleSpanish] = useState(false)
    const [toggleFrench, setToggleFrench] = useState(false)



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
                    name='globe-outline'
                    type='ionicon'
                    color='white' />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Selecciones el idioma</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Indicanos cual es tu idioma preferido</Text>


                <View style={styles.card}  >
                    <View style={{ marginTop: 25, marginLeft: 18, borderRadius: 13, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 18 }}>
                                Inglés
                            </Text>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 12 }}>
                                English
                            </Text>

                        </View>
                        <CheckBox
                            tintColors={{ true: '#5f2490', false: '#d4d4d4' }}
                            style={{ paddingRight: 10 }}
                            disabled={false}
                            value={toggleEnglish}
                            onValueChange={(newValue) => setToggleEnglish(newValue)}
                        />
                    </View>
                    <View style={{ marginTop: 15, marginLeft: 18, borderRadius: 13, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 18 }}>
                                Español
                            </Text>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 12 }}>
                                Español
                            </Text>

                        </View>
                        <CheckBox
                            tintColors={{ true: '#5f2490', false: '#d4d4d4' }}
                            style={{ paddingRight: 10 }}
                            disabled={false}
                            value={toggleSpanish}
                            onValueChange={(newValue) => setToggleSpanish(newValue)}
                        />
                    </View>

                    <View style={{ marginTop: 15, marginLeft: 18, borderRadius: 13, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 18 }}>
                                Francés
                            </Text>
                            <Text style={{ color: '#767676', paddingLeft: 20, fontSize: 12 }}>
                                Français
                            </Text>

                        </View>
                        <CheckBox
                            tintColors={{ true: '#5f2490', false: '#d4d4d4' }}
                            style={{ paddingRight: 10 }}
                            disabled={false}
                            value={toggleFrench}
                            onValueChange={(newValue) => setToggleFrench(newValue)}
                        />
                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default LanguageScreen