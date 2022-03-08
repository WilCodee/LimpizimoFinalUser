import React, {useContext} from 'react'; 
import GreenHeaderApp from '../../components/GreenHeaderApp/index';
import MenuApp from '../../components/MenuApp/index';
import ButtonApp from '../../components/ButtonApp/index'; 
import Home from '../Home/index';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../constants/colors';
import { strings } from '../../i18n';
import { useSelector, useDispatch } from 'react-redux';
import CleanTypeSelector from '../../components/AskService/CleanTypeSelector';
import ServiceTypeSelector from '../../components/AskService/ServiceTypeSelector';
import ServiceForm from '../../components/AskService/ServiceForm';

const AskService = ({navigation}) => {

    const authInfo = useSelector(state => state.auth)



    return(
        <View style={styles.container}>
            <GreenHeaderApp.Default title={strings('common.greeting', { name: authInfo.user.name ?? "" })} />
            <MenuApp.Default title="¿Qué servicio necesitas?" />
            <Text style={{...styles.textWhite, textAlign:'center' }}>Elige el tipo de limpieza</Text>
            <CleanTypeSelector />
            <View style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 25, paddingVertical: 8, marginTop: 12 }}>
                <ServiceTypeSelector />
                <ServiceForm />
                <View style={{ marginTop: 12, marginHorizontal: 20 }}>
                <ButtonApp.Default title="Solicitar Servicio" onPress={() => navigation.navigate('ServiceStandby')} />
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.$primaryColor,
        height: '100%'
    },
    textWhite: {
        color: 'white'
    }
})

export default AskService


