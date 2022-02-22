import React from 'react'; 
import {Text} from 'react-native'

const Default = ({color="#5f2490", fontSize=12, fontWeight="normal", value="Hello world"}) => {
    return(
        
        <Text style={{ fontSize, fontWeight , color }} >{value}</Text>
    )
}

export default Default; 