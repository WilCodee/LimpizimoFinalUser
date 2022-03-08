import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import Images from '../../../assets/images/';
import FastImage from 'react-native-fast-image';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';

const TipServiceScreen = ({ props, navigation }) => {
    const [isOneOptionSelected, setIsOneOptionSelected] = useState(false);
    const [isTwoOptionSelected, setIsTwoOptionSelected] = useState(false);
    const [isThreeOptionSelected, setIsThreeOptionSelected] = useState(false);
    const assignedEmployee = {
        nombre: 'Roberta ',
        apellidos: 'Sanchez',
        telefono: '3794202020',
        imagenPerfil: 'https://i.ibb.co/V9GYV8r/Recurso-1.png',
        calificacionPro: '4.89',
        fechaInicio: '17/07/2021',
        callePrincipal: 'Avenida 3 de abril y Buenos Aires'

    }

    const _toggleOption = option => {
        if (option === 1) {
            setIsOneOptionSelected(!isOneOptionSelected);
        }
        if (option === 2) {
            setIsTwoOptionSelected(!isTwoOptionSelected);
        }
        if (option === 3) {
            setIsThreeOptionSelected(!isThreeOptionSelected);
        }
    }
    const _renderOneOption = () => (
        <View
            style={{
                ...styles.option,
                backgroundColor: isOneOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.option.transform, { scale: isOneOptionSelected ? 1.1 : 1 }],
            }}>

            <Text style={styles.textOption}>$1</Text>
        </View>
    )
    const _renderTwoOption = () => (
        <View
            style={{
                ...styles.option,
                backgroundColor: isTwoOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.option.transform, { scale: isTwoOptionSelected ? 1.1 : 1 }],
            }}>
            <Text style={styles.textOption}>$2</Text>
        </View>
    )
    const _renderThreeOption = () => (
        <View
            style={{
                ...styles.option,
                backgroundColor: isThreeOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.option.transform, { scale: isThreeOptionSelected ? 1.1 : 1 }],
            }}>
            <Text style={styles.textOption}>$3</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ¿Deseas darle una propina?
            </Text>
            <View style={styles.employeeImageContainer}>
                <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
                <FastImage style={styles.employeeImage} source={{ uri: assignedEmployee.imagenPerfil }} resizeMode={FastImage.resizeMode.cover} />
            </View>
            <Text style={styles.name}>{assignedEmployee.nombre}{assignedEmployee.apellidos} </Text>

            <View style={styles.optionsContainer}>
                <Touchable onPress={() => _toggleOption(1)}>
                    <View style={styles.TipOption}>
                        {_renderOneOption()}

                    </View>
                </Touchable>
                <Touchable onPress={() => _toggleOption(2)}>
                    <View style={styles.TipOption}>
                        {_renderTwoOption()}

                    </View>
                </Touchable>
                <Touchable onPress={() => _toggleOption(3)}>
                    <View style={styles.TipOption}>
                        {_renderThreeOption()}

                    </View>
                </Touchable>

            </View>
            <View
                style={{ backgroundColor: '#73BF43', width: 200, height: 40, alignItems: 'center', borderRadius: 30, justifyContent: 'center', marginTop: 30 }}>
                <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>

                    Salir
                </Text>
            </View>


        </View>
    )
}


export default TipServiceScreen