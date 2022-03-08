import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Switch } from 'react-native'
import { Icon, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import CheckBox from '@react-native-community/checkbox';

const NotificationScreen = ({ navigation }) => {

    const [isEnabledSms, setIsEnabledSms] = useState(false);
    const toggleSwitchSms = () => setIsEnabledSms(previousState => !previousState);

    const [isEnabledEmail, setIsEnabledEmail] = useState(false);
    const toggleSwitchEmail = () => setIsEnabledEmail(previousState => !previousState);

    const [isEnabledPush, setIsEnabledPush] = useState(false);
    const toggleSwitchPush = () => setIsEnabledPush(previousState => !previousState);

    const [isEnabledPopups, setIsEnabledPopups] = useState(false);
    const toggleSwitchPopups = () => setIsEnabledPopups(previousState => !previousState);


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('Home')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                {/* <Image
                    style={{ height: 45, width: 75, marginRight: 18, marginLeft: 30, tintColor: 'white' }}
                    source={require('../../../assets/images/Global/card.png')}
                    resizeMode="contain" /> */}
                <Icon
                    size={40}
                    name='notifications-outline'
                    type='ionicon'
                    color='white' />
                <Text
                    style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Centro de Notificaciones</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12, textAlign: 'center', paddingLeft: 30, paddingRight: 30 }}>Administra las notificaciones promocionales que quieres recibir de limpizimo</Text>


                <View style={styles.card}  >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, paddingTop: 20 }}>
                        <Text>
                            SMS
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#5f2490" }}
                            thumbColor={isEnabledSms ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchSms}
                            value={isEnabledSms}
                        />
                    </View>
                    <Divider
                        orientation="horizontal"
                        subHeaderStyle={{ color: 'blue' }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, paddingTop: 20 }}>
                        <Text>
                            E-mails
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#5f2490" }}
                            thumbColor={isEnabledEmail ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchEmail}
                            value={isEnabledEmail}
                        />
                    </View>
                    <Divider
                        orientation="horizontal"
                        subHeaderStyle={{ color: 'blue' }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, paddingTop: 20 }}>
                        <Text>
                            Notificaciones push
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#5f2490" }}
                            thumbColor={isEnabledPush ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchPush}
                            value={isEnabledPush}
                        />
                    </View>
                    <Divider
                        orientation="horizontal"
                        subHeaderStyle={{ color: 'blue' }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingLeft: 30, paddingTop: 20 }}>
                        <Text>
                            Pop-ups
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#5f2490" }}
                            thumbColor={isEnabledPopups ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchPopups}
                            value={isEnabledPopups}
                        />
                    </View>
                    <Divider
                        orientation="horizontal"
                        subHeaderStyle={{ color: 'blue' }}
                    />

                </View>

            </View>
        </ScrollView >


    )
}

export default NotificationScreen