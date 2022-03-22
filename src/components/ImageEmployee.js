import React from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function ImageEmployee({ isVerified, imageUrl, size, fullRounded, borderThickness, outlineColor }) {
    //const imageUrl = 'https://i.ibb.co/V9GYV8r/Recurso-1.png'
    return (
        <View style={styles.mainContainer}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: imageUrl }} style={[{ height: size, width: size }, fullRounded ? { borderRadius: size } : { borderRadius: size / 3 }]} />
            </View>
            <View style={[{
                position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                borderColor: outlineColor, borderWidth: borderThickness, width: size, height: size
            }, fullRounded ? { borderRadius: size } : { borderRadius: size / 3 }
            ]}>
            </View>
            {isVerified ? (
                <View style={styles.verifiedProfileCheck} >
                    <Icon
                        size={20}
                        name='check-bold'
                        type='material-community'
                        color='white'
                    />
                </View>
            ) : null}
        </View>
    );
};

export default ImageEmployee;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    verifiedProfileCheck: {
        position: 'absolute',
        top: -5,
        right: -5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        backgroundColor: '#51AE26',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    }
})