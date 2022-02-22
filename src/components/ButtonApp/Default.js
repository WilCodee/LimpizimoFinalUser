import React from 'react'; 
import { Button, Text, TouchableOpacity } from 'react-native';

const Default = ({title, backgroundColor="#5f2490", color="white", onPress, height=45, borderRadius=60, marginBottom=4, marginTop=4}) => {
    return(
        <TouchableOpacity
        onPress={onPress}
        style={{ height, borderRadius, color, backgroundColor, alignItems:'center', justifyContent:'center', marginBottom, marginTop }}
        >
            <Text style={{ color, color:'white', fontWeight: 'bold', fontSize:18 }}> {title} </Text>
        </TouchableOpacity>
    )
}

export default Default; 
