import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const LoadingHistory = ({ navigation }) => {
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
                <Icon
                    size={60}
                    name='newspaper-outline'
                    type='ionicon'
                    color='white'
                />
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Historial de servicios</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Revisa el historial de los servicios realizados</Text>

                <View style={styles.card}>
                    <Text style={{ color: '#5f2490', alignSelf: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 20 }}>Historial de servicios</Text>
                    <Text onPress={() => navigation.navigate('HistoryService')} style={{ color: '#767676', textAlign: 'center', fontSize: 12, marginTop: 10 }}>Muy pronto tendrás acá el historial de servicios</Text>
                    <Image
                        style={{

                            alignSelf: 'center',
                            width: 230,
                            height: 320
                        }}
                        source={require('../../../../assets/images/Global/cleaningLady.png')}
                        resizeMode="contain"
                    />
                </View>

            </View>
        </ScrollView >


    )
}

export default LoadingHistory