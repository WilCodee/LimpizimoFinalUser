import React, { useState, useMemo } from 'react';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import {
  genderValidator,
  birthDateValidator,
  checkValidator
} from '../../utils/validation';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import ButtonApp from '../../components/ButtonApp';
import RenderInputs from '../../components/RenderInputs';
import { useForm } from "react-hook-form";
import { postData } from '../../utils/fetch/postData';
import { showOverlay } from '../../store/actions/overlay';
import { useDispatch } from 'react-redux';



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

    }
  ];
};



const Register = ({ navigation }) => {
  const dispatch = useDispatch()
  const [isSelected, setSelection] = useState({ value: false, error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [birthDate, setBirthDate] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });

  const date = new Date(birthDate.value).toUTCString();

  const _onRegisterPressed = async (data) => {
    try {
     
      if(data.password !== data.repeatPassword){
        alert('Las contraseñas no coinciden!')
        return; 
      }


      const birthDateError = birthDateValidator(birthDate.value);
      const genderError = genderValidator(gender.value);
      const checkError = checkValidator(isSelected.value);

      if (
        birthDateError ||
        genderError ||
        checkError
      ) {
        setBirthDate({ ...password, error: birthDateError });
        setGender({ ...gender, error: genderError });
        setSelection({isSelected,error: checkError});
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
        <View style={styles.head}>
          <Text style={styles.title}>REGISTRO</Text>
          <Text style={{...styles.subtitle, color: '#80868E'}}>
            Regístrate para disfrutar de Limpizimo
          </Text>
        </View>

       <RenderInputs inputs={formInputs} errors={errors} control={control} />
        
        <Text style={{...styles.dateTitle, color: '#69676D'}}>Fecha de nacimiento</Text>
        <View style={styles.inputView}>
          <DatePicker
            style={{ width: 200 }}
            date={birthDate.value}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                right: 4,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                borderWidth: 0
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(birthDate) => setBirthDate({ value: birthDate })}
          />
        </View>
        {birthDate.error ? (
          <Text style={styles.error}>{birthDate.error}</Text>
        ) : null}
        <Text style={{...styles.sexTitle, color: '#69676D'}}>Sexo</Text>
        <View style={styles.inputView}>
          <Picker
            style={{
              height: 100,
              width: 260,
              color: '#828282',
              placeholderTextColor: '#828282',
              fontSize: 3,
              paddingLeft: 10,
              marginLeft: 10
            }}
            
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label="Selecciona la casilla" value="1" />
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Femenino" value="femenino" />
          </Picker>
        </View>
        {gender.error ? <Text style={styles.error}>{gender.error}</Text> : null}
        <View style={{...styles.checkboxContainer, marginTop: 12}}>
          <CheckBox
            onValueChange={setSelection}
            //  onChange={setSelection}
            value={isSelected.value}
            style={styles.checkbox}
            tintColors={{true:'#5f2490'}}
          />
          <Text style={styles.termsButton}>
            Acepto los términos y condiciones de Limpizimo
          </Text>
          {console.log(isSelected)}
        </View>
        {isSelected.error ? <Text style={styles.error}>{isSelected.error}</Text> : null}
        

        <ButtonApp.Default title="Regístrate" onPress={handleSubmit(_onRegisterPressed)} />
        
      </View>
    </ScrollView>
  );
};

export default Register;
