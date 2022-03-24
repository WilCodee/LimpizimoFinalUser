import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';

import {useForm} from 'react-hook-form';
import RenderInputs from '../../components/RenderInputs';

import InternalContainer from './../../containers/InternalContainer';
import Images from '../../assets/images';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import ButtonApp from '../../components/ButtonApp';

const getFormInputs = () => {
  return [
    {
      status: true,
      label: 'Nombre',
      placeholder: 'Ingresa tu nombre',
      name: 'name',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Apellido',
      placeholder: 'Ingresa tu apellido',
      name: 'lastName',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Correo electrónico',
      placeholder: 'Ingresa tu correo electrónico',
      name: 'email',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Contraseña',
      placeholder: 'Ingresa tu contraseña',
      name: 'password',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
      secureTextEntry: true,
    },
    {
      status: true,
      label: 'Repite la contraseña',
      placeholder: 'Repite tu contraseña',
      name: 'repeatPassword',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
      secureTextEntry: true,
    },
    {
      status: true,
      label: 'Teléfono celular',
      placeholder: 'Ingresa tu celular',
      name: 'phone',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Fecha de nacimiento',
      placeholder: 'Ingresa tu fecha de nacimiento',
      type: 'date',
      name: 'birthDate',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Género',
      placeholder: 'Selecciona tu género',
      type: 'select',
      name: 'gender',
      defaultValue: '',
      items: [
        {
          label: 'Masculino',
          value: 'M',
        },
        {
          label: 'Femenino',
          value: 'F',
        },
        {
          label: 'Prefiero no decirlo',
          value: 'ND',
        },
      ],
      rules: {required: {value: true, message: 'Requerido'}},
    },
  ];
};

const UserProfileScreen = ({navigation}) => {
  const {control, formState} = useForm();
  const {errors} = formState;

  const formInputs = useMemo(() => getFormInputs());

  return (
    <ScrollView>
      <InternalContainer
        image="https://images.pexels.com/photos/11574219/pexels-photo-11574219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Ricardo Mancero"
        navigation={navigation}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: colors.secondaryColor,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderRadius: 25,
                marginBottom: 5,
                width: 350,
              }}>
              <TextApp.Default
                value="Limpipuntos"
                color={colors.mainColorLight}
                fontSize={24}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextApp.Default
                  value="100"
                  color={colors.mainColorLight}
                  fontSize={30}
                  fontWeight="bold"
                />

                <Image
                  source={Images.whiteRightArrowV2}
                  style={{width: 20, height: 20, marginLeft: 10}}
                  resizeMode="contain"
                />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: '80%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View>
              <RenderInputs
                inputs={formInputs}
                errors={errors}
                control={control}
              />
            </View>

            <View>
              <ButtonApp.Default title="Cambiar contraseña" />
              <ButtonApp.Default
                width={310}
                borderColor={colors.primaryColor}
                borderWidth={2}
                title="Cerrar sesión"
                backgroundColor={colors.mainColorLight}
                color="red"
              />
            </View>
          </View>
        </View>
      </InternalContainer>
    </ScrollView>
  );
};

export default UserProfileScreen;
