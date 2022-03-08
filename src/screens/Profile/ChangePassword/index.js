import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import styles from './styles';
import { Header, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ChangePassword = ({ navigation }) => {
    return (
        <>
            <Header backgroundColor='white'>
                <Icon
                    onPress={() => navigation.navigate('Profile')}
                    name='chevron-back-outline'
                    type='ionicon'
                    color='black'
                />
            </Header>

            <View style={{ alignItems: 'center', backgroundColor: 'white', width: '100%', height: '100%' }}>
                <Text style={styles.changePassTitle}>Cambiar contraseña</Text>
                <Text style={styles.inputPassword}>
                    Contraseña actual
                </Text>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa la contraseña actual"
                        placeholderTextColor="#828282"
                        secureTextEntry={true}
                    />
                </View>

                <Text style={styles.inputPassword}>
                    Nueva contraseña
                </Text>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa la nueva contraseña"
                        placeholderTextColor="#828282"
                        secureTextEntry={true}
                    />
                </View>

                <Text style={styles.inputPassword}>
                    Repite nueva contraseña
                </Text>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Repite la nueva contraseña"
                        placeholderTextColor="#828282"
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.containerAceptButton}>
                    <Text style={styles.AceptTextButton}>
                        Aceptar
                    </Text>
                </TouchableOpacity>
            </View>
        </>

    )

}

export default ChangePassword;
