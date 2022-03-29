import React, {useMemo, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import ButtonApp from '../../components/ButtonApp';
import OverlayApp from '../../components/OverlayApp';
import {postData} from '../../utils/fetch/postData';
import {useForm, Controller} from 'react-hook-form';
import RenderInputs from '../../components/RenderInputs';
import {HStack, VStack} from 'native-base';
import TitleApp from '../../components/TitleApp';
import {AuthContext} from '../../context/AuthContext';
import Images from '../../assets/images';

const getFormInputs = () => {
  return [
    {
      status: true,
      label: 'Correo electrónico',
      placeholder: 'Ingrese su correo electrónico',
      name: 'email',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Contraseña',
      placeholder: 'Ingrese su contraseña',
      name: 'password',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
      secureTextEntry: true,
    },
  ];
};

const Login = ({navigation, errorText}) => {
  const {control, handleSubmit, formState} = useForm();
  const {errors} = formState;

  const {login} = useContext(AuthContext);

  const _onLoginPressed = async data => {
    const loginRequest = await postData('authentication/client/login', data);
    if (loginRequest.OK) {
      const currentUser = loginRequest.user;
      console.info('cu', currentUser);
      login(currentUser);
    } else {
      Alert.alert('Credenciales incorrectas');
    }
  };

  const formInputs = useMemo(() => getFormInputs());

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <VStack alignItems="center">
          <Image
            source={Images.logo}
            style={{width: 200, height: 100}}
            resizeMode="contain"
          />
        </VStack>
        <VStack alignItems="center" my={2}>
          <TitleApp.Default value="INICIA SESIÓN" />
          <Text style={{...styles.subtitle, color: '#80868E'}}>
            Ingresa para solicitar tu servicio
          </Text>
        </VStack>
        <RenderInputs inputs={formInputs} control={control} errors={errors} />

        <TouchableOpacity style={{marginVertical: 2}}>
          <Text style={styles.forgot_button}>
            ¿Olvidaste tu contraseña?
            <Text style={styles.textBold}> Recuperar contraseña</Text>
          </Text>
        </TouchableOpacity>

        <ButtonApp.Default
          title="Ingresar"
          onPress={handleSubmit(_onLoginPressed)}
        />
        <ButtonApp.Default
          title="Ingresar con Facebook"
          backgroundColor="#4267B2"
          borderWidth={0}
          icon={Images.logoFacebook}
        />
        <ButtonApp.Default
          title="Ingresar con Google"
          backgroundColor="#DB4437"
          borderWidth={0}
          icon={Images.logoGoogle}
        />

        <HStack justifyContent="center">
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgot_button}>
              ¿No tienes cuenta?
              <Text style={styles.textBold}> Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </HStack>

        <OverlayApp.Default />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 10,
  },
  forgot_button: {
    fontSize: 12,
    color: '#5f2490',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#5f2490',
  },
});

export default Login;
