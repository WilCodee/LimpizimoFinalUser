import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Stack, Text} from 'native-base';
import {TouchableOpacity, Platform, View, StyleSheet} from 'react-native';
import moment from 'moment';

const Default = ({
  label,
  colorScreen,
  onChange,
  iconCollection,
  iconName,
  mode="date"
}) => {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if(mode==="date"){
      onChange && onChange(currentDate);
      return
    }

    if(mode==="time"){
      let parsedDateToTime = currentDate.getHours() + ':' + currentDate.getMinutes()
      onChange && onChange(parsedDateToTime)
    }

    
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
    <TouchableOpacity onPress={showDatepicker}>
     <Text style={styles.label}>{label}</Text>
     <View style={styles.inputContainer}>
         {
             date !== null ? 
            <Text ml={2} my={2} >{ mode === 'date' ? date.toLocaleDateString('en-US') : date.toLocaleTimeString()  }</Text>
            :
            <Text ml={2} my={2} color="#828282" >Select</Text>
         }
     </View>
    </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          value={date ?? new Date()}
          mode={mode}
          display="default"
          onChange={handleChange}
        />
      )}
    </>
  );
};


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