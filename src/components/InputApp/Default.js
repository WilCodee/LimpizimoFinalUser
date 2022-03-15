import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

const Default = ({
  colorScreen,
  label,
  placeholder,
  onChangeText,
  iconCollection,
  iconName,
  secureText,
  keyboardType="default", 
  autoCompleteType="off",
  defaultValue=""
}) => {
  return (
    <>
    <Text style={styles.label}>{label}</Text>
     <View style={styles.inputContainer}>
       <TextInput
         style={styles.input}
         placeholder={placeholder}
         placeholderTextColor="#828282"
         keyboardType={keyboardType}
         autoCompleteType={autoCompleteType}
         secureTextEntry={secureText}
         color={colorScreen ?? '#5f2490'}
         onChangeText={onChangeText}
         defaultValue={defaultValue}
       />
     </View>
    </>
  );
};

export default Default;





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