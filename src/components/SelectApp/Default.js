import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Select } from 'native-base'

const Default = ({ label, placeholder = "Select", selectedValue, onSelect, items }) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <Select
                    placeholder={placeholder}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => onSelect(itemValue)}
                    borderWidth={0}
                >
                    {
                        items.map((item, idx) => <Select.Item key={idx} label={item.label} value={item.value} />)
                    }
                </Select>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    label:{
        fontSize: 13,
        color: '#69676D'
    },
    inputContainer:{
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: '#5f2490',
        borderRadius: 30, 
        height: 42,
        marginBottom: 2,
        paddingLeft: 8
    },
    input:{
        fontSize:13
    }
})

export default Default; 