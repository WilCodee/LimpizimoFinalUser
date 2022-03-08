import React, { useState } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native'
import Images from '../../../assets/images/';
import FastImage from 'react-native-fast-image';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';

const BadgeServiceScreen = ({ props, navigation }) => {
    const [isTrustOptionSelected, setIsTrustOptionSelected] = useState(false);
    const [isSecurityOptionSelected, setIsSecurityOptionSelected] = useState(false);
    const [isExcelentServiceOptionSelected, setIsExcelentServiceOptionSelected] = useState(false);
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
            setIsTrustOptionSelected(!isTrustOptionSelected);
        }
        if (option === 2) {
            setIsSecurityOptionSelected(!isSecurityOptionSelected);
        }
        if (option === 3) {
            setIsExcelentServiceOptionSelected(!isExcelentServiceOptionSelected);
        }
    }
    const _renderTrustOption = () => (
        <View
            style={{
                ...styles.trustContainer,
                backgroundColor: isTrustOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.trustContainer.transform, { scale: isTrustOptionSelected ? 1.1 : 1 }],
            }}>
            {(isTrustOptionSelected) ? <Image style={styles.cleaningImage} source={Images.trust3} resizeMode="contain" /> : <Image style={styles.cleaningImage} source={Images.trust2} resizeMode="contain" />}

        </View>
    )
    const _renderSecurityOption = () => (
        <View
            style={{
                ...styles.trustContainer,
                backgroundColor: isSecurityOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.trustContainer.transform, { scale: isSecurityOptionSelected ? 1.1 : 1 }],
            }}>
            {(isSecurityOptionSelected) ? <Image style={styles.cleaningImage} source={Images.security3} resizeMode="contain" /> : <Image style={styles.cleaningImage} source={Images.security2} resizeMode="contain" />}
        </View>
    )
    const _renderExcelentServiceOption = () => (
        <View
            style={{
                ...styles.trustContainer,
                backgroundColor: isExcelentServiceOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
                transform: [...styles.trustContainer.transform, { scale: isExcelentServiceOptionSelected ? 1.1 : 1 }],
            }}>
            {(isExcelentServiceOptionSelected) ? <Image style={styles.cleaningImage} source={Images.excelentservice3} resizeMode="contain" /> : <Image style={styles.cleaningImage} source={Images.excelentservice2} resizeMode="contain" />}
        </View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ¿Deseas darle una insignia a?
            </Text>
            <View style={styles.employeeImageContainer}>
                <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
                <FastImage style={styles.employeeImage} source={{ uri: assignedEmployee.imagenPerfil }} resizeMode={FastImage.resizeMode.cover} />
            </View>
            <Text style={styles.name}>{assignedEmployee.nombre}{assignedEmployee.apellidos} </Text>

            <View style={styles.cleaningOptionsContainer}>
                <View style={{ flexDirection: 'column' }}>

                    <Touchable onPress={() => _toggleOption(1)}>
                        <View style={styles.cleaningOption}>
                            {_renderTrustOption()}
                        </View>
                    </Touchable>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>Confianza</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Touchable onPress={() => _toggleOption(2)}>
                        <View style={styles.cleaningOption}>
                            {_renderSecurityOption()}

                        </View>
                    </Touchable>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>Seguridad</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Touchable onPress={() => _toggleOption(3)}>
                        <View style={styles.cleaningOption}>
                            {_renderExcelentServiceOption()}

                        </View>
                    </Touchable>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, width: 65, textAlign: 'center' }}>Excelente servicio</Text>

                </View>
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


export default BadgeServiceScreen