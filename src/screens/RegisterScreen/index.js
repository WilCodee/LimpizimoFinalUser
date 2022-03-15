import React, { useState, useMemo } from 'react';
import { Icon } from 'react-native-elements';

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import ButtonApp from '../../components/ButtonApp';
import RenderInputs from '../../components/RenderInputs';
import { useForm } from "react-hook-form";
import { postData } from '../../utils/fetch/postData';
import TitleApp from '../../components/TitleApp';
import {CheckBox, Select, VStack} from 'native-base'
import DatePickerApp from '../../components/DatePickerApp';

const getFormInputs = () => {
  return [
    {
      status: true,
      label: "Nombre",
      placeholder: "Ingresa tu nombre",
      name: "name",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} }
    },
    {
      status: true,
      label: "Apellido",
      placeholder: "Ingresa tu apellido",
      name: "lastName",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} }
    },
    {
      status: true,
      label: "Correo electrónico",
      placeholder: "Ingresa tu correo electrónico",
      name: "email",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} }
    },
    {
      status: true,
      label: "Contraseña",
      placeholder: "Ingresa tu contraseña",
      name: "password",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} },
      secureTextEntry: true
    },
    {
      status: true,
      label: "Repite la contraseña",
      placeholder: "Repite tu contraseña",
      name: "repeatPassword",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} },
      secureTextEntry: true
    },
    {
      status: true,
      label: "Teléfono celular",
      placeholder: "Ingresa tu celular",
      name: "phone",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"}}
    },
    {
        status: true,
        label: "Fecha de nacimiento",
        placeholder: "Ingresa tu fecha de nacimiento",
        type: "date",
        name: "birthDate",
        defaultValue: "",
        rules: { required: { value: true, message: "Requerido"}}
    },
    {
        status: true,
        label: "Género",
        placeholder: "Selecciona tu género",
        type: "select",
        name: "gender",
        defaultValue: "",
        items: [
            {
                label: 'Masculino',
                value: 'M'
            },
            {
                label: 'Femenino',
                value: 'F'
            },
            {
                label: 'Prefiero no decirlo',
                value: 'ND'
            },
        ],
        rules: { required: { value: true, message: "Requerido"}}
    }
  ];
};



const RegisterScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState({ value: false, error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [birthDate, setBirthDate] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });
  

  const [bDate, setBDate] = useState(new Date())
  const [language, setLanguage] = useState('')

  const date = new Date(birthDate.value).toUTCString();

  const _onRegisterPressed = async (data) => {
    console.log('DATA', data)
    try {
     
      if(data.password !== data.repeatPassword){
        alert('Las contraseñas no coinciden!')
        return; 
      }


      

      const clientInfo = {
        //TODO, check with Axel why is not working with spaces in user name (ex: pablo trujillo is not working)
        username: `${data.name}${data.lastName}${data.name}${data.lastName}`,
        name: data.name, 
        last_name: data.lastName, 
        email: data.email, 
        //TODO, check why is not working with "Masculino"
        gender: "male",
        phone: data.phone,
        password: data.password, 
        //TODO, check the required format of date
        birthdate: "2016-05-18T16:00:00.000+00:00"
      }

      const register = await postData('authentication/createUserClient', clientInfo);
      if(!register.OK){
        dispatch(showOverlay({children: <Text>{register.message}</Text>}))
      }else{
        navigation.navigate('Login');
      }
      
    } catch (error) {
      console.log(error);
    }

    //loaded
  };

  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState

  const formInputs = useMemo(() => getFormInputs());


  return (
    <ScrollView contentContainerStyle={{ flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <View style={{position:'absolute', top:10, left: 10}}>
          <Icon
            onPress={() => navigation.navigate('Login')}
            name="chevron-back-outline"
            type="ionicon"
            color="black"
          />
      </View>
      
      <View>
        <VStack alignItems="center" >
          <TitleApp.Default value="REGISTRO" />
          <Text style={{...styles.subtitle, color: '#80868E'}}>
            Regístrate para disfrutar de Limpizimo
          </Text>
        </VStack>

       <RenderInputs inputs={formInputs} errors={errors} control={control} />
       <ButtonApp.Default title="Regístrate" onPress={handleSubmit(_onRegisterPressed)} />
        
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    inputView: {
    
        marginLeft: 0,
        borderWidth:  2,
        backgroundColor: "white",
        borderColor: '#5f2490',
        borderRadius: 30,
        
        height: 42,
        marginBottom: 2,
        alignItems: "center",
        justifyContent: "center",
      },
     
      TextInput: {
          height: 40,
          margin: 12,
          width:240
      },
     
      termsButton: {
        paddingTop:5,
        fontSize:11,
        color: 'gray',
        flex:0,
        height: 30,
        marginBottom: 0,
        textAlign: "center",
        justifyContent: "center",
        textDecorationLine: 'underline'
      },
     
      registerBtn: {
        height: 42,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        backgroundColor: `#5f2490`,
        width: "65%",
        marginBottom:30,
      },
      register:{
          color:'white',
          fontWeight: 'bold',
          fontSize:18,
          
          
      },
      textBold:{
        paddingRight:80,
        marginRight:54,
        marginLeft:0,
        
        
      },
      nameTitle:{
        paddingRight:200,   
        fontSize: 13,
    },
      lastNameTitle:{
        paddingRight:200,   
        fontSize: 13,
    },
    emailTitle:{
      paddingRight:145,   
      fontSize: 13,
  },
    passwordTitle:{
      paddingRight:183,   
      fontSize: 13,
    },
    repasswordTitle:{
      paddingRight:124,   
      fontSize: 13,
    },
    phoneTitle:{
      paddingRight:158,   
      fontSize: 13,
    },
    dateTitle:{
      paddingRight:125,   
      fontSize: 13,
    },
    sexTitle:{
      paddingRight:219,   
      fontSize: 13,
    },
      title:{
        marginTop:25,
        fontWeight: 'bold',
        color: '#5f2490',
        fontSize: 23,
      },
      subtitle:{
        
        marginBottom:20,
        fontSize: 12,
       
      },
      checkboxContainer: {
          flexDirection: "row",
          marginBottom: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        checkbox: {
          alignSelf: "center",
        },
        label: {
          margin: 8,
          fontSize: 10,
        },
        error: {
          fontSize: 14,
        color: 'red',
        paddingHorizontal: 4,
        paddingTop: 2,
        },

})

export default RegisterScreen;