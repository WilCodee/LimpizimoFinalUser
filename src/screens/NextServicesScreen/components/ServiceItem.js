import React from 'react'; 
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Images from '../../../assets/images';
const ServiceItem = (props) => {
    const { serviceData } = props;
    return(
        <TouchableOpacity onPress={props.onPress}>
        <View>
            <Text style={styles.addressNameStyle} >{serviceData.address.name}</Text>
            <Text>{serviceData.address.firstStreet}</Text>
            <View style={styles.detailsStyle}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white'}} >{serviceData.colaborator.fullName}</Text>
                    <Text style={{color:'white'}}>{serviceData.details.date}</Text>
                    <Text style={{color:'white'}}>{serviceData.details.limpiPuntos} Limpipuntos</Text>
                </View>

                <View style={{display:'flex', flexDirection:'row'}}>
                <View style={{flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>USD {serviceData.details.cost}</Text>
                    <Text style={{color:'white'}}>*****</Text>
                </View>
                    <View style={{flexDirection:'column', justifyContent:'center'}}>
                        <Image source={Images.whiteRightArrowV2} style={{ width: 20, height: 40, marginLeft: 16 }} resizeMode="contain"  />
                    </View>
                </View>                
            </View>
        </View>
        </TouchableOpacity>
    )
}


const styles =  StyleSheet.create({
    detailsStyle: {
        padding: 16,
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop: 8,
        backgroundColor: '$primaryColor',
        borderRadius: 50
    },
    addressNameStyle: {
        color: '$primaryColor',
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default ServiceItem; 