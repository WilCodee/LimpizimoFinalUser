import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

function ImageUserProfile({ isVerified, imageUrl, size, fullRounded, borderThickness, outlineColor }) {
    //const imageUrl = 'https://i.ibb.co/V9GYV8r/Recurso-1.png'
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={[{ height: size, width: size }, fullRounded ? { borderRadius: size } : { borderRadius: size / 3 }]} />
            </View>
            <View style={[{
                position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                borderColor: outlineColor, borderWidth: borderThickness, width: size, height: size
            }, fullRounded ? { borderRadius: size } : { borderRadius: size / 3 }
            ]}>
            </View>
            {isVerified ? (
                <View style={{
                    position: 'absolute', top: ((size / 100)), right: ((size / 100)),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: (size / 100) * 25, width: (size / 100) * 25, backgroundColor: outlineColor,
                    borderRadius: size
                }} >
                    <Icon
                        size={Math.trunc((size / 100) * 18)}
                        name='check-bold'
                        type='material-community'
                        color='white'
                    />
                </View>
            ) : null}
        </View>
    );
};

export default ImageUserProfile

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})