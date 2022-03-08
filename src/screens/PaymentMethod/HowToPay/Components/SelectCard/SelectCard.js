import React, { useState, useCallback, useRef } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Carousel from "react-native-snap-carousel";


const exampleItems = [
    {
        title: 'Item 1',
        text: 'Text 1',
    },
    {
        title: 'Item 2',
        text: 'Text 2',
    },
    {
        title: 'Item 3',
        text: 'Text 3',
    },

];



const SelectCard = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);


    const renderItem = useCallback(({ item, index }) => (
        <View
            style={{


                marginRight: 0,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 0,
                paddingBottom: 0

            }}
        >
            <Image
                style={{ height: 140, width: 210 }}
                source={require('../../../../../assets/images/Global/card3.png')}
                resizeMode="contain" />
            {/* <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text> */}
        </View>
    ), []);
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
                    source={require('../../../../../assets/images/Global/card.png')}
                    resizeMode="contain" />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Métodos de pago</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Selecciona un método de pago para el servicio</Text>


                <View style={styles.card}  >
                    <Text style={{ margin: 30, fontWeight: 'bold', textAlign: 'center', color: '#767676', fontSize: 18 }}>
                        Elige la tarjeta
                    </Text>

                    <Carousel
                        layout="default"
                        ref={ref}
                        data={carouselItems}
                        sliderWidth={350}
                        itemWidth={210}
                        renderItem={renderItem}
                        onSnapToItem={(index) => setActiveIndex(index)}
                    />
                    <View style={{ backgroundColor: '#5f2490', width: '50%', height: '8%', alignSelf: 'center', justifyContent: 'center', borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 150 }}>

                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => navigation.navigate('HowToPay')}>
                            Guardar
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView >


    )
}

export default SelectCard