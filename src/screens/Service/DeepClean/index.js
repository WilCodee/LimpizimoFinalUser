import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const DeepClean = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('Service')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                <Image
                    style={{ height: 70, width: 50, tintColor: '#fff', marginBottom: 10 }}
                    source={require('../../../assets/images/Global/deepCleaning.png')}
                    resizeMode="contain" />
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>LIMPIEZA PROFUNDA</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Conoce las tareas a realizar por cada área</Text>

                <View style={styles.card}>
                    <Image
                        style={{ height: 60, width: 90, alignSelf: 'center', marginTop: 20, }}
                        source={require('../../../assets/images/Global/bedroom.png')}
                        resizeMode="contain" />
                    <Text style={{ color: '#5f2490', alignSelf: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 20 }}>Dormitorio</Text>

                    <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 0, }}>

                            <View style={{ flexDirection: 'column', marginLeft: 0, }}>

                                <Text style={styles.textDescription}>Limpiar los polvos.</Text>
                                <Text style={styles.textDescription}>Tender las camas.</Text>
                                <Text style={styles.textDescription}>Alzar y lavar ropa sucia.</Text>
                                <Text style={styles.textDescription}>Barrer, trapear o aspirar.</Text>
                                <Text style={styles.textDescription}>Doblar y guardar las toallas limpias.</Text>
                                <Text style={styles.textDescription}>Limpiar ventanales interiores.</Text>
                                <Text style={styles.textDescription}>Ordenar y limpiar los armarios.</Text>
                                <Text style={styles.textDescription}>Dar la vuelta al colchón.</Text>
                                <Text style={styles.textDescription}>Limpiar los marcos y puertas.</Text>
                                <Text style={styles.textDescription}>Cambio de sabanas.</Text>
                            </View>
                        </View>
                    </View>


                    <Image
                        style={{ height: 70, width: 70, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../../assets/images/Global/kitchenRoom.png')}
                        resizeMode="contain" />
                    <Text style={{ color: '#5f2490', alignSelf: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 20 }}>Cocina</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Text style={styles.textDescription}>Lava y acomoda los platos.</Text>
                            <Text style={styles.textDescription}>Limpieza de electrodomésticos y lockers.</Text>
                            <Text style={styles.textDescription}>Limpieza interior y exterior del microondas.</Text>
                            <Text style={styles.textDescription}>Limpieza interior y exterior del horno.</Text>
                            <Text style={styles.textDescription}>Limpieza de fregadero, barras y grifos.</Text>
                            <Text style={styles.textDescription}>Cocina básica.</Text>
                            <Text style={styles.textDescription}>Sacar alimentos, limpiar y volver a acomodar.</Text>
                            <Text style={styles.textDescription}>Limpiar paredes de grasa.</Text>
                            <Text style={styles.textDescription}>Organiza y limpia tu refrigeradora.</Text>
                        </View>
                    </View>

                    <Image
                        style={{ height: 70, width: 70, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../../assets/images/Global/bathRoom.png')}
                        resizeMode="contain" />
                    <Text style={{ color: '#5f2490', alignSelf: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 20 }}>Baño</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                        </View>


                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Text style={styles.textDescription}>Limpieza del baño.</Text>
                            <Text style={styles.textDescription}>Limpia barras, grifos, accesorios y gabinetes.</Text>
                            <Text style={styles.textDescription}>Recoge toallas sucias, tapetes y ropa sucia.</Text>
                            <Text style={styles.textDescription}>Limpia la ducha y los ventanales.</Text>
                            <Text style={styles.textDescription}>Limpiar el sarro interno del váter.</Text>
                            <Text style={styles.textDescription}>Limpiar la duña o bañera.</Text>
                            <Text style={styles.textDescription}>Limpiar espejos.</Text>
                            <Text style={styles.textDescription}>Barrer y trapear.</Text>
                            <Text style={styles.textDescription}>Organiza y limpia los lockers.</Text>
                            <Text style={styles.textDescription}>Limpiar paredes y azulejos.</Text>
                        </View>
                    </View>
                    <Image
                        style={{ height: 40, width: 70, alignSelf: 'center', marginTop: 20 }}
                        source={require('../../../assets/images/Global/commonSpaces.png')}
                        resizeMode="contain" />
                    <Text style={{ color: '#5f2490', alignSelf: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 20 }}>Espacios comunes</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 0, }}>
                        <View style={{ flexDirection: 'column', marginLeft: 20, }}>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkPurple.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={require('../../../assets/images/Global/checkGreen.png')}
                                resizeMode="contain" />
                        </View>


                        <View style={{ flexDirection: 'column', marginLeft: 0, }}>
                            <Text style={styles.textDescription}>Barrer, trapear o aspirar pisos.</Text>
                            <Text style={styles.textDescription}>Desempolvar y limpiar superficies.</Text>
                            <Text style={styles.textDescription}>Limpiar ventanas internas.</Text>
                            <Text style={styles.textDescription}>Separar y sacar la basura.</Text>
                            <Text style={styles.textDescription}>Organizar y limpiar repisas.</Text>
                            <Text style={styles.textDescription}>Limpiar los focos.</Text>
                            <Text style={styles.textDescription}>Limpiar a profundidad sillas y mesas.</Text>
                            <Text style={styles.textDescription}>Organiza y limpia los lockers.</Text>
                            <Text style={styles.textDescription}>Sacar manchas del piso.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 320 }}>
                    <Icon
                        style={{ marginTop: 7 }}
                        name='alert-circle-outline'
                        type='ionicon'
                        color='white'
                    />
                    <Text style={{ textAlign: 'center', color: '#68c530', fontSize: 18, fontWeight: 'bold' }}>
                        Importante
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, padding: 15 }}>
                        Hemos realizado este estudio, basados en nuestra experiencia, un estimado de las tareas
                        que se deben realizar por cada área de la casa, si deseas realizar otro tipo de tarea no te preocupes, puedes
                        indicarle a la colaboradora sin problema. Es importante aclarar que todas las tareas que realizan
                        se sujetan a las horas contratadas.
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, padding: 15, marginBottom: 5 }}>
                        En el caso que se termine el tiempo contratado y deseas que la colaboradora te ayude en algo extra, no te preocupes,
                        el tiempo seguirá corriendo y se te cobrará una vez tu y la colaboradora deslicen el botón de finalizar,
                        es ahí cuando se te cobrará el total de las horas trabajadas.
                    </Text>

                    <Image
                        style={{ height: 30, width: 20, alignSelf: 'center', tintColor: '#fff' }}
                        source={require('../../../assets/images/Global/purpleLogo.png')}
                        resizeMode="contain" />
                </View>
            </View>
        </ScrollView >


    )
}

export default DeepClean