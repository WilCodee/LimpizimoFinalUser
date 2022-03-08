import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Image } from 'react-native'
import { Icon, Input, Tab, TabView } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const LoadingLimpiPoint = ({ navigation }) => {



    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('LimpiPoint')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>


                <View style={{ flexDirection: 'row' }}  >

                    <Image
                        style={{ height: 60, width: 55, alignSelf: 'center', marginBottom: 15 }}
                        source={require('../../../../assets/images/Global/limp3.png')}
                        resizeMode="contain" />
                    <Text style={{ color: '#767676', alignSelf: 'center', fontSize: 30, textAlign: 'center', paddingRight: 20 }}>Limpipuntos</Text>

                </View>
                <View style={{ alignSelf: 'flex-start', paddingLeft: 15, paddingRight: 15 }}>
                    <Text style={{ color: '#767676', fontSize: 16, marginBottom: 10 }}>
                        Hola Ricardo,
                    </Text>
                    <Text
                        onPress={() => navigation.navigate('LoadedLimpiPoint')}
                        style={{ color: '#767676', fontSize: 14 }}>
                        Acá muy pronto podrás encontrar las mejores promociones para ti
                        y tu familia. Espéralas!!
                    </Text>
                    <Image

                        style={{ height: 190, width: 175, alignSelf: 'center', marginTop: 150 }}
                        source={require('../../../../assets/images/Global/food.png')}
                        resizeMode="contain" />
                </View>



            </View>
        </ScrollView >


    )
}

export default LoadingLimpiPoint