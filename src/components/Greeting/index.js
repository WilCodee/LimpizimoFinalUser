import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'
import colors from '../../constants/colors';


const Greeting = ({value}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: colors.secondaryColor,
        width: '100%'
    },
    content: {
        color: '#ffffff',
        textAlign:'center'
    }
})
export default Greeting; 