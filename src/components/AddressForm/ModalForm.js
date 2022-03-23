import React, {useState, useMemo, useContext} from 'react';
import RenderInputs from '../RenderInputs/index';
import {useForm, Controller} from 'react-hook-form';
import {Modal, Button} from 'native-base';
import ButtonApp from '../ButtonApp';
import colors from '../../constants/colors';
import TextApp from '../TextApp';
import { AuthContext } from '../../context/AuthContext';
import { postData } from '../../utils/fetch/postData';
import { Alert } from 'react-native';
import { getData } from '../../utils/fetch/getData';

const getFormInputs = () => {  
  return [
    {
      status: true,
      label: 'Tipo',
      placeholder: 'Ingrese el tipo de domicilio',
      type: 'select',
      name: 'type',
      items: [
        {
          label: 'Casa',
          value: 'Casa',
        },
        {
          label: 'Oficina',
          value: 'Oficina',
        },
        {
          label: 'Otro',
          value: 'Otro',
        },
      ],
      rules: {required: {value: true, message: 'Requerido'}},
    },
    {
      status: true,
      label: 'Referencia del lugar',
      placeholder: 'Está cerca de la embajada...',
      name: 'reference',
      defaultValue: '',
      rules: {required: {value: true, message: 'Requerido'}},
    },
  ];
};

const ModalForm = ({query, coordinates}) => {
  const {user, login} = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false);
  const {control, handleSubmit, formState} = useForm();
  const {errors} = formState;
  const formInputs = useMemo(() => getFormInputs(query));

  const onSubmit = async (data) => {
    let formattedAddress = query
    if( query.includes(" y ")){
        formattedAddress = query.split(' y ')
    }

    const info = {
        type: data.type.toLowerCase(),
        principal_street: Array.isArray(formattedAddress) ? formattedAddress[0] : query,
        secondary_street: Array.isArray(formattedAddress) ? formattedAddress[1] : "",
        country:"ecuador",
        city:"quito",
        place_reference: data.reference,
        number_bedrooms: 2,
        number_bathrooms: 4,
        latitude: coordinates[1],
        longitude: coordinates[0]
    }
    const request = await postData(`address/createAddress/${user['_id']['$oid']}`,  info)
    console.log('r', request)
    if(request.OK){
      const addressesRequest = await getData(
        `address/getAllAddresses/${user._id['$oid']}`,
      );
      console.log('adrequest', addressesRequest)
      if (addressesRequest.OK) {
        login({...user, addresses:addressesRequest.addresses})
      }
      Alert.alert("Dirección agregada exitosamente")
    }else{
        Alert.alert("Algo ha salido mal, por favor reintenta más tarde. ")
    }
  };

  return (
    <>
      <ButtonApp.Default
        onPress={() => setShowModal(true)}
        title="Guardar Dirección"
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Detalles de dirección</Modal.Header>
          <Modal.Body>
            <TextApp.Default value={query} textAlign="center" fontSize={14} fontWeight="bold"  />
            <RenderInputs
              inputs={formInputs}
              control={control}
              errors={errors}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancelar
              </Button>
              <Button
                onPress={handleSubmit(onSubmit)}
                bgColor={colors.primaryColor}>
                Guardar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalForm;
