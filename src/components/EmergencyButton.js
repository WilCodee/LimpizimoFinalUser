import React from 'react';
import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

const EmergencyButton = ({ large, primaryColor, visible }) => {

    const _onEmergencyPress = () => {
        const phone = '911'
        const phoneNumber =
            Platform.OS === 'ios'
                ? `telprompt:\${${phone}}`
                : `tel:\${${phone}}`
        try {
            const canOpenURL = Linking.canOpenURL(phoneNumber)
            return canOpenURL
                ? Linking.openURL(phoneNumber)
                : Alert.alert('El dispositivo no soporta esta acción')
        } catch (error) {
            console.log('El dispositivo no soporta esta acción')
        }
    }

    return (
        <View style={[styles.mainEmergencyContainer, {opacity: visible? 1 : 0}]}>
            {large ? (
                <TouchableOpacity style={[styles.largeContainer, {
                    backgroundColor: primaryColor ? colors.primaryColor : colors.secondaryColor,
                    borderColor: primaryColor ? colors.mainColorLight : colors.primaryColor
                }]} onPress={_onEmergencyPress}>
                    <Image
                        style={{ height: 40, width: 36 }}
                        source={require('../assets/images/Global/security3.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.emergencyText}>Servicios de Emergencia</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.smallContainer} onPress={_onEmergencyPress}>
                    <View style={styles.smallContainerImage}>
                        <Image
                            style={{ width: 20, height: 20, borderColor: primaryColor ? colors.primaryColor : colors.secondaryColor }}
                            source={require('../assets/images/Global/security3.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={[styles.smallContainerText, { color: primaryColor ? colors.primaryColor : colors.secondaryColor }]}>Emergencia</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default EmergencyButton

const styles = StyleSheet.create({
    mainEmergencyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeContainer: {
        width: '60%',
        height: 56,
        borderRadius: 16,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    smallContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    },
    smallContainerImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 50,
        width: 36,
        height: 36
    },
    smallContainerText: {
        fontSize: 14,
        color: colors.primaryColor,
        marginLeft: 6
    },
    emergencyText: {
        width: '60%',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8
    }
})