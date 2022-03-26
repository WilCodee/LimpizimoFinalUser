import {Modal, View, Text} from 'react-native';
import React from 'react';

import colors from '../../../constants/colors';
import TextApp from '../../../components/TextApp';
import ButtonApp from '../../../components/ButtonApp';

const ModalDialog = ({visible, title, message, closeModal}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors.mainColorLight,
            width: '95%',
            paddingVertical: 20,
            borderRadius: 20,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <TextApp.Default fontSize={20} fontWeight="bold" value={title} />
            <Text style={{marginVertical: 20, textAlign: 'center'}}>
              {message}
            </Text>

            <ButtonApp.Default
              onPress={closeModal}
              title="OK"
              backgroundColor={colors.mainColorLight}
              borderWidth={0}
              color={colors.primaryColor}
              marginTop={0}
              marginBottom={0}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDialog;
