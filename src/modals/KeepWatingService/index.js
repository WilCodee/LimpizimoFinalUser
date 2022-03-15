import React from 'react';
import { View, Text, Modal, Image } from 'react-native';
import { Pressable } from 'native-base';
import styles from './styles';
import Images from '../../assets/images';
//import { strings } from '../../i18n';

const KeepWaitingService = props => {
  const _onCloseModal = () => {
    props.onCloseModal();
  };
  const _onRequestServiceAgainButtonPress = () => {
    props.onRequestServiceAgainPressed();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Image source={Images.waitingService} style={styles.image} resizeMode="contain"></Image>
        <Text style={styles.textQuestion}>A</Text>
        <Text style={styles.textMessage}>B</Text>
        <Pressable style={styles.messageBorder} onPress={_onRequestServiceAgainButtonPress}>
          <Text style={styles.text1}>C</Text>
        </Pressable>
        <Pressable style={styles.messageBorder} onPress={_onCloseModal}>
          <Text style={styles.text2}>D</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default KeepWaitingService;
