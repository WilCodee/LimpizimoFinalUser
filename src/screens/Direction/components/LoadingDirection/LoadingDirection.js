import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Swipeable from 'react-native-swipeable-row';
import ButtonApp from '../../../../components/ButtonApp';
import {getData} from '../../../../utils/fetch/getData';
import {useSelector} from 'react-redux'

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

/*const directions = [
    {
        country: 'Ecuador',
        city: 'Quito',
        direction: 'Avigiras y de los Guayacanes',
        type: 'Casa'
    }
]*/

const LoadingDirection = ({ navigation }) => {
    const [loading, setLoading] = React.useState(true)
    const [directions, setDirections] = React.useState([])
    const [refresh, setRefresh] = React.useState(false)

    const authInfo = useSelector(state => state.auth)

    

    const initialRequest = async () => {
        const allAddressRequest = await getData(`address/getAllAddresses/${authInfo.user['_id']['$oid']}`)
        console.info('aar', allAddressRequest)
        if(allAddressRequest.OK){
            setLoading(false)
            setDirections(allAddressRequest.addresses)
        }
    }

    React.useEffect(() => {
        initialRequest()
    }, [refresh])

    
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
                    {
                        loading &&
                            <Image
                            resizeMode="contain"
                            source={require('../../../../assets/images/Global/direction.png')}
                            style={{ width: 360, height: 220 }}
                        />
                    }

                    {
                        !loading &&
                        directions &&
                        directions.length > 0 &&
                        directions.map((u, i) => {
                            return (
                                <View style={{ height: 80, width: '100%', backgroundColor: 'white', justifyContent: 'center' }}>
                                    <Swipeable rightButtons={rightButtons} rightButtonWidth={100} >
                                        <View key={i} style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                                            <Card
                                                containerStyle={{ backgroundColor: '#263648', borderRadius: 20, margin: 0, padding: 0, flex: 1 }}
                                            >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Image
                                                            resizeMode="contain"
                                                            source={require('../../../../assets/images/Global/house.png')}
                                                            style={{ width: 60, height: 40, tintColor: 'white' }}
                                                        />
                                                        <Text style={{ paddingLeft: 15, fontWeight: 'bold', fontSize: 12, color: 'white' }}>{u.type}</Text>
                                                    </View>
                                                    <View key={i} style={{flex: 1}}>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3}}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>País: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{u.country}</Text>

                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>Ciudad: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{u.city}</Text>

                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>Dirección: </Text>
                                                            <Text style={{ fontSize: 12, color: 'white' }}>{`${u.principal_street} ${u.secondary_street}`}</Text>

                                                        </View>
                                                    </View>
                                                    <Image
                                                        style={{ tintColor: '#68c530', width: 60, height: 40, marginTop: 5 }}
                                                        resizeMode="contain"
                                                        source={require('../../../../assets/images/Global/purpleLogo.png')}
                                                    />
                                                </View>
                                            </Card>
                                        </View>
                                    </Swipeable>
                                </View>
                            );
                        })
                    }
                    
                    <View style={{marginHorizontal: 30, marginTop: 10}}>
                        <ButtonApp.Default title="Agregar nueva" onPress={() => navigation.navigate('AddDirection', { refresh, setRefresh } )} />
                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default LoadingDirection