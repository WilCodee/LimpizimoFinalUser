import React, {useContext} from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import { NewServiceContext } from '../../context/NewServiceContext';

const serviceTypes = [
    {
        id: 1,
        title: "Única vez"
    },
    {
        id: 2,
        title: "Frecuente"
    }
]


const ServiceOptions = () => {
    const { service, setServiceType } = useContext( NewServiceContext )

    return(
        serviceTypes.map((serviceType )=> 
            <TouchableOpacity 
            activeOpacity={1} 
            style={{...styles.optionContainer, backgroundColor: service.serviceType.id === serviceType.id ? colors.secondaryColor : colors.primaryColor }}  
            onPress={() => setServiceType(serviceType.id)}
            >
                <Text style={styles.serviceText} >Servicio {serviceType.title}</Text>
            </TouchableOpacity>
        )
    )
}


const ServiceTypeSelector = () => {
    return(
        <View style={styles.mainContainer}>
            <ServiceOptions />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: colors.primaryColor,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 50,
        marginHorizontal: 12,
        marginTop: -20,
        paddingVertical: 2
    },
    optionContainer: {
        backgroundColor: colors.$primaryColor,
        borderRadius: 50,
        paddingVertical: 10,
        marginHorizontal: 2,
        flex: 1,
    },
    serviceText: {
        textAlign:'center',
        color: 'white',
        fontSize: 12
    }
})

export default ServiceTypeSelector; 