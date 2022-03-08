import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'
import Colors  from '../../constants/colors'


const Default = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.$secondaryColor,
        width: '100%'
    },
    title: {
        paddingVertical: 2,
        textAlign:'center',
        color: '#fff'
    }

})

export default Default; 