import React from 'react'
import styles from './components/LoadingDirection/styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Swipeable from 'react-native-swipeable-row';


const rightButtons = [
    /*   */

    <View style={{ backgroundColor: '#5f2490', width: 120, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 10, paddingRight: 20, borderRadius: 20 }}>
        <Icon
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate('')}
            name='pencil-outline'
            type='ionicon'
            color='white'
        />

        <Icon
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate('')}
            name='heart'
            type='ionicon'
            color='white'
        />

        <Icon
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate('')}
            name='trash'
            type='ionicon'
            color='white'
        />
    </View>


];

const directions = [
    {
        country: 'Ecuador',
        city: 'Quito',
        direction: 'Avigiras y de los Guayacanes',
        type: 'Casa'
    },


]


const DirectionScreen = ({ navigation }) => {
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
                name='location-outline'
                type='ionicon'
                color='white'
            />
            <Text
                style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Direcciones</Text>


            <View style={styles.card}  >

                <View style={{ flexDirection: 'column', width: '100%' }}>

                    <Text style={{ color: '#5f2490', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Mis Direcciones</Text>
                    <Text style={{ color: '#767676', textAlign: 'center', fontWeight: 'bold', fontSize: 12, marginTop: 10, marginBottom: 30 }}>Acá podrás observar tus direcciones</Text>


                </View>
                <Image

                    resizeMode="contain"
                    source={require('../../assets/images/Global/direction.png')}
                    style={{ width: 360, height: 220 }}
                />


                <View style={{ backgroundColor: '#5f2490', width: '55%', height: '6%', alignSelf: 'center', justifyContent: 'center', borderRadius: 20, marginBottom: 60, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}
                        onPress={() => navigation.navigate('Direction')}>
                        Agregar nueva
                    </Text>
                </View>

            </View>
            {
                        directions.map((u, i) => {
                            return (
                                <View style={{ height: 80, width: '100%', backgroundColor: '#ECEDEE', justifyContent: 'center' }}>
                                    <Swipeable rightButtons={rightButtons} rightButtonWidth={100} >
                                        <View key={i} style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                                            <Card
                                                containerStyle={{ backgroundColor: '#263648', borderRadius: 20, margin: 0, padding: 0, }}
                                            >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'column' }}>

                                                        <Image

                                                            resizeMode="contain"
                                                            source={require('../../assets/images/Global/house.png')}
                                                            style={{ width: 60, height: 40, tintColor: 'white' }}
                                                        />
                                                        <Text style={{ paddingLeft: 15, fontWeight: 'bold', fontSize: 12, color: 'white' }}>{u.type}</Text>
                                                    </View>
                                                    <View key={i} style={{}}>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3, width: 50 }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>País: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{u.country}</Text>

                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>Ciudad: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{u.city}</Text>

                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>Dirección: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{u.direction}</Text>

                                                        </View>
                                                    </View>
                                                    <Image
                                                        style={{ tintColor: '#68c530', width: 60, height: 40, marginTop: 5 }}
                                                        resizeMode="contain"
                                                        source={require('../../assets/images/Global/purpleLogo.png')}
                                                    />
                                                </View>
                                            </Card>
                                        </View>
                                    </Swipeable>
                                </View>
                            );
                        })
                    }  
        </View>
    </ScrollView >
    )
}

export default DirectionScreen