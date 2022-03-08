import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import { Button } from 'react-native-elements';

const ModalTester = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={{}} >
            <Button
                onPress={toggleModal}
                buttonStyle={{
                    backgroundColor: '#73BF43',
                    borderRadius: 0,
                }}
                title={'Canjear'}
                containerStyle={{
                    width: 186,
                    borderRadius: 0,
                    marginTop: 0
                }}
            />

            <Modal isVisible={isModalVisible}>
                <View style={{ backgroundColor: 'white', height: '53%', borderRadius: 20 }}>
                    <Image
                        style={{ height: 50, width: 50, alignSelf: 'center', marginTop: 25 }}
                        source={require('../../../../assets/images/Global/limp2.png')}
                        resizeMode="contain" />
                    <Text style={{ textAlign: 'center', paddingLeft: 5, paddingRight: 5, color: '#5f2490' }}>
                        Presenta el código para poder reclamar tu regalo, recuerda que se aplica solo
                        una vez y se debitarán los puntos inmediatamente de tu perfil haciendo click en
                        aceptar
                    </Text>
                    <Image
                        style={{ height: 170, width: 170, alignSelf: 'center' }}
                        source={require('../../../../assets/images/Global/code.png')}
                        resizeMode="contain" />
                    <Text style={{ textAlign: 'center', color: '#767676' }}>
                        Código: Limpz045941
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
                        <Button
                            titleStyle={{ color: 'red' }}
                            onPress={toggleModal}
                            buttonStyle={{
                                shadowColor: 'transparent',
                                color: 'green',
                                backgroundColor: 'white',
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: '#5f2490'
                            }}
                            title={'Cancelar'}
                            containerStyle={{
                                marginRight: 5,
                                width: '30%',
                                borderRadius: 0,
                                marginTop: 0
                            }}
                        />
                        <Button
                            onPress={toggleModal}
                            buttonStyle={{

                                backgroundColor: '#73BF43',
                                borderRadius: 30,
                            }}
                            title={'Aceptar'}
                            containerStyle={{
                                width: '30%',
                                borderRadius: 0,
                                marginTop: 0,
                                marginLeft: 5,
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View >
    );
}

export default ModalTester