import React from 'react'; 
import {StyleSheet, Text} from 'react-native'

const Default = ({value}) => {
    return(
        <Text style={styles.title}>{value}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#5f2490',
        fontWeight: 'bold'
    }
})

export default Default; 