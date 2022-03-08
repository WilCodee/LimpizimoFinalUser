import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images';
import { strings } from '../../i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Divider } from 'react-native-elements'

const EmployeeProfile = props => {
  // const assignedEmployee = useSelector(state => state.employee.assignedEmployee);
  const assignedEmployee = {
    nombre: 'Roberta ',
    apellidos: 'Sanchez',
    cedula: '17xxxxxx04',
    telefono: '3794202020',
    imagenPerfil: 'https://i.ibb.co/V9GYV8r/Recurso-1.png',
    calificacionPro: '4.89',

  }
  const _navigateBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Touchable style={styles.touchableContainer} onPress={_navigateBack}>
        <View style={styles.backContainer}>
          <Image source={Images.whiteLeftArrow} style={styles.backImage} resizeMode="contain" />
          <Text style={styles.backText}>{strings('common.back').toLowerCase()}</Text>
        </View>
      </Touchable>
      <View style={styles.imageEmployeeContainer}>
        <ImageAssignedEmployee />
      </View>
      <View style={styles.employeeDetailsContainer}>
        <View style={styles.employeeDataContainer1}>
          <Text style={styles.employeeNameText}>{`${assignedEmployee.nombre} ${assignedEmployee.apellidos.split(' ')[0]}`}</Text>
          <Text style={styles.employeeIdText}>{`${strings('employeeFound.id')}:${assignedEmployee.cedula}`}</Text>
        </View>
        <View style={styles.employeeDataContainer2}>
          <Text style={styles.employeeDetailsText}>250</Text>
          <Text style={styles.employeeDetailsText}>
            ({assignedEmployee.calificacionPro}
            <Icon name="md-star" size={22} color={EStyleSheet.value('$primaryColor')} />)
          </Text>
          <Text style={{ ...styles.employeeDetailsText, marginRight: 20 }}>3</Text>
        </View>
        <View style={styles.employeeDataContainer3}>
          <Text style={styles.infoText}>{strings('common.services').toLowerCase()}</Text>
          <Text style={styles.infoText}>{strings('common.rating')}</Text>
          <Text style={{ ...styles.infoText, marginRight: 1 }}>{strings('common.months')}</Text>
        </View>
        <Divider
          style={{ width: `100%` }}
          orientation="horizontal"
          width={2}
          height={0}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image resizeMode="contain" source={Images.trust} style={{ width: 100, height: 100 }} ></Image>
            <Text style={{ color: '#68c530', fontWeight: 'bold' }}>Confianza</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image resizeMode="contain" source={Images.security} style={{ width: 100, height: 100 }}></Image>
            <Text style={{ color: '#68c530', fontWeight: 'bold' }}>Seguridad</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image resizeMode="contain" source={Images.excelentservice} style={{ width: 100, height: 100 }}></Image>
            <Text style={{ color: '#68c530', fontWeight: 'bold' }}>Excelente Servicio</Text>
          </View>


        </View>
        <View style={styles.listContainer}>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedData')}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedAddress')}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedData')}</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 25, marginBottom: 10, marginTop: 20, color: '#5f2490', fontWeight: 'bold' }}>
            Habilidades:
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 5 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image source={Images.clean} style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" />
              <Text style={{ color: '#5f2490', fontWeight: 'bold', marginLeft: 20 }}>Limpiar</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image source={Images.iron} style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" />
              <Text style={{ color: '#5f2490', fontWeight: 'bold', marginLeft: 20 }}>Planchar</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image source={Images.wash} style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" />
              <Text style={{ color: '#5f2490', fontWeight: 'bold', marginLeft: 20 }}>Lavar</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image source={Images.cook} style={{ width: 50, height: 50, marginLeft: 20 }} resizeMode="contain" />
              <Text style={{ color: '#5f2490', fontWeight: 'bold', marginLeft: 20 }}>Cocinar</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeProfile;
