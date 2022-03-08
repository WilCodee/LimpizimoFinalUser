import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import Images from '../../../assets/images/';
import FastImage from 'react-native-fast-image';
import { Rating, AirbnbRating } from 'react-native-ratings';


const RatingServiceScreen = ({ props, navigation }) => {
    const assignedEmployee = {
        nombre: 'Roberta ',
        apellidos: 'Sanchez',
        telefono: '3794202020',
        imagenPerfil: 'https://i.ibb.co/V9GYV8r/Recurso-1.png',
        calificacionPro: '4.89',
        fechaInicio: '17/07/2021',
        callePrincipal: 'Avenida 3 de abril y Buenos Aires'

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ¿Cómo estuvo el servicio de?
            </Text>
            <View style={styles.employeeImageContainer}>
                <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
                <FastImage style={styles.employeeImage} source={{ uri: assignedEmployee.imagenPerfil }} resizeMode={FastImage.resizeMode.cover} />
            </View>
            <Text style={styles.name}>{assignedEmployee.nombre}{assignedEmployee.apellidos} </Text>
            <AirbnbRating
                reviews={[]}
            />
            <View style={{ backgroundColor: '#73BF43', width: 200, height: 40, alignItems: 'center', borderRadius: 30, justifyContent: 'center', marginTop: 130 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                    Salir
                </Text>
            </View>

        </View>
    )
}

export default RatingServiceScreen