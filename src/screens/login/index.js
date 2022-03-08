import React, { useState, useMemo } from 'react';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { emailValidator, passwordValidator } from '../../utils/validation';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import ButtonApp from '../../components/ButtonApp';
import OverlayApp from '../../components/OverlayApp';
import { postData } from '../../utils/fetch/postData';
import { getData } from '../../utils/fetch/getData';
import { useForm, Controller } from "react-hook-form";
import ControllerTextInput from '../../components/ControllerTextInput';
import RenderInputs from '../../components/RenderInputs';
import { login } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { showOverlay } from '../../store/actions/overlay';



const getFormInputs = () => {
  return [
    {
      status: true,
      label: "Correo electrónico",
      placeholder: "Ingrese su correo electrónico",
      name: "email",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} }
    },
    {
      status: true,
      label: "Contraseña",
      placeholder: "Ingrese su contraseña",
      name: "password",
      defaultValue: "",
      rules: { required: { value: true, message: "Requerido"} },
      secureTextEntry: true
    }
  ];
};


const Login = ({ navigation, errorText }) => {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState

  const _onLoginPressed = async (data) => {

    const loginRequest = await postData('authentication/client/login', data)
    if(loginRequest.OK){
      const currentUser = loginRequest.user
      console.info('cu', currentUser)
      dispatch(login({user:{...currentUser}}))
      navigation.navigate('NextServices')
    }else{
      dispatch(showOverlay({children: <Text>Bad login</Text>}))
    }

  };


  const formInputs = useMemo(() => getFormInputs());


  return (
    <ScrollView contentContainerStyle={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <View>
        <View style={styles.head}>
          <Text style={styles.title}> INICIA SESIÓN</Text>
          <Text style={{...styles.subtitle, color: '#80868E'}}>
            Ingresa para solicitar tu servicio
          </Text>
        </View>
        <RenderInputs inputs={formInputs} control={control} errors={errors} />        
        
        <TouchableOpacity style={{marginVertical:2}} >
          <Text style={styles.forgot_button}>
            ¿Olvidaste tu contraseña?
            <Text style={styles.textBold}> Recuperar contraseña</Text>
          </Text>
        </TouchableOpacity> 

        <ButtonApp.Default title="Ingresar" onPress={handleSubmit(_onLoginPressed)} />

        <ButtonApp.Facebook title="Ingresa con Facebook" />
          
        <ButtonApp.Google title="Ingresa con Google" />

       

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.forgot_button}>
            ¿No tienes cuenta?
            <Text style={styles.textBold}> Regístrate</Text>
          </Text>
        </TouchableOpacity>

        <OverlayApp.Default />
     
      </View>
    </ScrollView>
  );
};

export default Login;
