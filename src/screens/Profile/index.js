import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import styles from './styles';
import { Card, Icon, Avatar } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ModalMenu from '../Home/components/modal';

const Profile = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")
  return (
    <>
      <ModalMenu containerStyles={{ backgroundColor: '#5f2490' }} iconColor='white'></ModalMenu>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerName}>
            <Text style={styles.name}>Ricardo Mancero</Text>
            <Text style={{ color: '#fff', fontSize: 15 }}>(4.89)</Text>
          </View>
          <Card containerStyle={styles.containerCard}>
            <View style={styles.containerAvatar}>
              <Avatar
                size={110}
                rounded
                source={{
                  uri:
                    'https://smashinglogo.com/static/img/virtual-designers/peter.gif'
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.containerLimpipuntos}
            //onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.textLimpipuntos}>
                Limpipuntos
              </Text>
              <Text style={styles.numberLimpipuntos}>
                100
              </Text>

              <View>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='white'
                />
              </View>
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
              <Text style={styles.inputName}>
                Nombre
              </Text>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ingresa tu nombre"
                  placeholderTextColor="#828282"
                />
              </View>

              <Text style={styles.inputLastName}>Apellido</Text>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ingresa tu apellido"
                  placeholderTextColor="#828282"
                />
              </View>

              <Text style={styles.inputEmail}>
                Correo electronico
              </Text>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ingresa tu correo electrónico"
                  placeholderTextColor="#828282"
                  keyboardType="email-address"
                /*  onChangeText={(email) => setEmail(email)} */
                />
              </View>

              <Text style={styles.inputPhone}>
                Teléfono celular
              </Text>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ingresa tu teléfono celular"
                  placeholderTextColor="#828282"
                  keyboardType="numeric"
                />
              </View>

              <Text style={styles.inputDate}>
                Fecha de nacimiento
              </Text>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ingresa tu fecha de nacimiento"
                  placeholderTextColor="#828282"
                />
              </View>

              <Text style={styles.inputSex}>
                Sexo
              </Text>
              <View style={styles.containerInput}>
                <Picker
                  style={styles.pickerStyles}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Selecciona la casilla" value="" />
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Femenino" value="femenino" />
                </Picker>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}
                style={styles.containerChangePass}>
                <Text style={styles.textChangePass}>
                  Cambiar contraseña
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.containerLogout}
                onPress={() => navigation.navigate('Login')}
              >
                <Text

                  style={{ fontSize: 18, color: 'red' }}>
                  Cerrar sesión
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.containerCancel}
                onPress={() => navigation.goBack()}
              >
                <Text

                  style={{ fontSize: 18, color: 'red' }}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  )
}

export default Profile;
