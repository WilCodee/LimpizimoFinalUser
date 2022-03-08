import React, { useState, useMemo } from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet, Alert } from 'react-native'
import { Icon, CheckBox } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
/* import CheckBox from '@react-native-community/checkbox'; */
import { Picker } from '@react-native-picker/picker';
import { postData } from '../../../../utils/fetch/postData'; 
import { useSelector, useDispatch } from 'react-redux';
import RenderInputs from '../../../../components/RenderInputs';
import { useForm, Controller } from "react-hook-form";
import ButtonApp from '../../../../components/ButtonApp';


const getFormInputs = () => {
    return [
      {
        status: true,
        label: "Calle Principal",
        placeholder: "Ingrese la calle principal",
        name: "mainStreet",
        defaultValue: "",
        rules: { required: { value: true, message: "Requerido"} }
      },
      {
        status: true,
        label: "Calle Secundaria",
        placeholder: "Ingrese la calle secundaria",
        name: "secondStreet",
        defaultValue: "",
        rules: { required: { value: true, message: "Requerido"} }
      },
      {
        status: true,
        label: "Referencia del lugar",
        placeholder: "Está cerca de la embajada...",
        name: "reference",
        defaultValue: "",
        rules: { required: { value: true, message: "Requerido"} }
      }
    ];
  };



const AddDirection = ({ navigation }) => {
    const [toggleCheckBoxHouse, setToggleCheckBoxHouse] = useState(false)
    const [toggleCheckBoxOffice, setToggleCheckBoxOffice] = useState(false)
    const [toggleCheckBoxOther, setToggleCheckBoxOther] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("ecuador");
    const [selectedLanguage, setSelectedLanguage] = useState("quito");
    const [selectedCity, setSelectedCity] = useState("quito");
    const [selectedBathRoomNumber, setSelectedBathRoomNumber] = useState(1);
    const [selectedRoomNumber, setSelectedRoomNumber] = useState(1);
    const { control, handleSubmit, formState } = useForm();
    const { errors } = formState
    const authInfo = useSelector(state => state.auth)

    console.info('ai', authInfo)

    const toggleHouse = () => {
        setToggleCheckBoxHouse(!toggleCheckBoxHouse)
    }
    const toggleOffice = () => {
        setToggleCheckBoxOffice(!toggleCheckBoxOffice)
    }
    const toggleOther = () => {
        setToggleCheckBoxOther(!toggleCheckBoxOther)
    }

    const getType = () => {
        if(toggleCheckBoxHouse){
            return "casa"
        }

        if(toggleCheckBoxOffice){
            return "oficina"
        }

        if(toggleOther){
            return "otro"
        }
    }

    const onSubmit= async (values) => {
        const info = {
            type: getType(),
            principal_street: values.mainStreet,
            secondary_street: values.secondStreet,
            country:selectedCountry,
            city:selectedCity,
            place_reference: values.reference,
            number_bedrooms: selectedRoomNumber ,
            number_bathrooms: selectedBathRoomNumber
        }
        const request = await postData(`address/createAddress/${authInfo.user['_id']['$oid']}`,  info)
        if(request.OK){
            Alert.alert("Dirección agregada exitosamente")
            navigation.state.params.setRefresh(!navigation.state.params.refresh)
        }else{
            Alert.alert("Algo ha salido mal, por favor reintenta más tarde. ")
        }
    }

    const formInputs = useMemo(() => getFormInputs());


    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('LoadingDirection')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                <Icon
                    size={60}
                    name='location-outline'
                    type='ionicon'
                    color='white'
                />
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Direcciones</Text>


                <View style={styles.card}>

                    <Text style={{ textAlign: 'center', fontSize: 18, padding: 10, color: '#767676', fontWeight: 'bold' }}>
                        El dominicilio que vas a registrar es de:
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                        <Image
                            style={{
                                marginTop: 15,
                                justifyContent: 'center',
                                width: 50,
                                height: 40,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginLeft: 20

                            }}
                            source={require('../../../../assets/images/Global/house.png')}
                            resizeMode="contain" />
                        <CheckBox
                            size={20}
                            checked={toggleCheckBoxHouse}
                            checkedIcon='check-circle'
                            uncheckedIcon='circle'
                            checkedColor='green'

                            onPress={toggleHouse}
                        />

                        <Image
                            style={{
                                marginTop: 15,
                                justifyContent: 'center',
                                width: 60,
                                height: 50,
                                justifyContent: 'center',
                                alignSelf: 'center',


                            }}
                            source={require('../../../../assets/images/Global/offi.png')}
                            resizeMode="contain" />
                        <CheckBox
                            size={20}
                            checked={toggleCheckBoxOffice}
                            checkedIcon='check-circle'
                            uncheckedIcon='circle'
                            checkedColor='green'

                            onPress={toggleOffice}
                        />
                        <Image
                            style={{
                                marginTop: 15,
                                justifyContent: 'center',
                                width: 60,
                                height: 50,
                                justifyContent: 'center',
                                alignSelf: 'center',


                            }}
                            source={require('../../../../assets/images/Global/otherPlace.png')}
                            resizeMode="contain" />

                        <CheckBox
                            size={20}
                            checked={toggleCheckBoxOther}
                            checkedIcon='check-circle'
                            uncheckedIcon='circle'
                            checkedColor='green'

                            onPress={toggleOther}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
                        <Text style={{ color: '#767676', fontWeight: 'bold' }}>
                            Casa
                        </Text>
                        <Text style={{ color: '#767676', fontWeight: 'bold' }}>
                            Oficina
                        </Text>
                        <Text style={{ color: '#767676', fontWeight: 'bold' }}>
                            Otro
                        </Text>
                    </View>

                    <View style={{marginHorizontal: 16}}>
                        
                        <Text style={formStyles.label}>
                            País
                        </Text>
                        <View style={formStyles.inputContainer}>
                            <Picker
                                dropdownIconColor='black'
                                itemStyle={{}}
                                style={{}}
                                selectedValue={selectedCountry}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedCountry(itemValue)
                                }>
                                <Picker.Item style={{ color: '#828282', fontSize: 14 }} label="Argentina" value="argentina" />
                                <Picker.Item style={{ color: '#828282', fontSize: 14 }} label="Ecuador" value="ecuador" />
                            </Picker>
                        </View>
                        
                        <Text style={formStyles.label}>
                            Ciudad
                        </Text>

                        <View style={formStyles.inputContainer}>

                            <Picker
                                dropdownIconColor='black'

                                selectedValue={selectedCity}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedCity(itemValue)
                                }>
                                <Picker.Item style={{ color: '#828282', fontSize: 14 }} label="Quito" value="quito" />


                            </Picker>
                        </View>

                        <RenderInputs inputs={formInputs} control={control} errors={errors} /> 

                        
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>

                            <View style={{ paddingRight: 20 }}>
                                <Text style={{ ...formStyles.label, marginLeft: 7 }}>
                                    Dormitorios
                                </Text>

                                <View style={{...formStyles.inputContainer, width: 102}}>

                                    <Picker
                                        dropdownIconColor='black'

                                        selectedValue={selectedRoomNumber}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedRoomNumber(itemValue)
                                        }>
                                        <Picker.Item style={{ color: '#828282' }} label="1" value="1" />
                                        <Picker.Item style={{ color: '#828282' }} label="2" value="2" />
                                        <Picker.Item style={{ color: '#828282' }} label="3" value="3" />
                                        <Picker.Item style={{ color: '#828282' }} label="4" value="4" />
                                        <Picker.Item style={{ color: '#828282' }} label="5" value="5" />

                                    </Picker>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center' }}>

                                <Text style={{ ...formStyles.label, marginLeft: 24 }}>
                                    Baños
                                </Text>

                                <View style={{...formStyles.inputContainer, width: 102}}>

                                    <Picker
                                        dropdownIconColor='black'
                                        selectedValue={selectedBathRoomNumber}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedBathRoomNumber(itemValue)
                                        }>
                                        <Picker.Item style={{ color: '#828282' }} label="1" value="1" />
                                        <Picker.Item style={{ color: '#828282' }} label="2" value="2" />
                                        <Picker.Item style={{ color: '#828282' }} label="3" value="3" />
                                        <Picker.Item style={{ color: '#828282' }} label="4" value="4" />
                                        <Picker.Item style={{ color: '#828282' }} label="5" value="5" />


                                    </Picker>
                                </View>
                            </View>
                        </View>
                        
                        <ButtonApp.Default marginTop={12} title="Guardar" onPress={handleSubmit(onSubmit)} />
                    </View>
                </View>

            </View>
        </ScrollView >
    )
}


const formStyles = StyleSheet.create({
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
        justifyContent:'center',
        marginBottom: 2,
        paddingLeft: 8
    },
    input:{
        fontSize:13
    }
})

export default AddDirection