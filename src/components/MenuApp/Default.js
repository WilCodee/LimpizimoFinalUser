import React, {useState} from 'react';
import Images from '../../assets/images';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  Modal,
  Button,
  FlatList,
  Box,
  HStack,
  Avatar,
  VStack,
  Text,
  Pressable,
} from 'native-base';
import colors from '../../constants/colors';
import LimpizimoMenu from '../LimpizimoMenu';
import {Icon} from 'react-native-elements';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Default = ({title}) => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation()
  console.log('navigation', navigation)
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 8,
        marginLeft: 12,
      }}>
      <View style={{flex: 0.5}}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon
            iconStyle={{marginRight: 30}}
            name="menu"
            size={45}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width="350px" height="700px">
          <Modal.CloseButton />
          <Modal.Body>
            <LimpizimoMenu />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popupImg: {
    width: 20,
    height: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Default;
