import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const ItemDetail = ({icon, text, endText, background}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: colors.mainColorLight,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: background && colors.mainColorLight,
            borderRadius: background && 30,
            padding: background && 7,
          }}>
          <Image
            source={icon}
            style={{
              margin: background ? 0 : 7,
              width: 30,
              height: 30,
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{color: colors.mainColorLight, fontSize: 12, marginLeft: 8}}>
          {text}
        </Text>
      </View>

      {endText && (
        <TouchableOpacity>
          <TextApp.Default
            fontWeight="bold"
            fontSize={16}
            value={endText}
            color={colors.mainColorLight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemDetail;
