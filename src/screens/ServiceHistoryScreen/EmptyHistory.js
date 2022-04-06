import {View, Image} from 'react-native';
import React from 'react';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import Images from '../../assets/images';

const EmptyHistory = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <TextApp.Default
        value="Historial de servicios"
        fontSize={25}
        fontWeight="bold"
      />

      <TextApp.Default
        value="Muy pronto tendrás acá el historial de servicos"
        fontSize={12}
        color={colors.mainColorDark}
        otherStyle={{marginTop: 10}}
      />

      <View>
        <Image
          source={Images.cleaningLady}
          style={{width: 280, height: 350}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default EmptyHistory;
