import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import SwipeButton from 'rn-swipe-button';
import Images from '../../../assets/images/';
import FastImage from 'react-native-fast-image';


const CountDown = ({ props, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tiempo restante del servicio
            </Text>
            <Image style={{ width: 270, height: 270, marginTop: 60, marginBottom: 150 }} source={Images.newclock} resizeMode="contain" />

            <SwipeButton
                enableReverseSwipe
                titleColor
                onSwipeSuccess={() => alert('Slide success!')}
                titleStyles={{ fontWeight: 'bold', paddingRight: 40 }}
                titleColor='white'
                title={'FINALIZAR'}
                height={65}
                width={280}
                thumbIconBackgroundColor={'white'}
                railFillBackgroundColor={'#3eaee7'}
                railBackgroundColor={'#73BF43'} />
        </View>
    )
}

export default CountDown