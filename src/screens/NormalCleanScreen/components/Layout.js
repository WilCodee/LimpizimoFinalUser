import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import colors from '../../../constants/colors';
import TextApp from '../../../components/TextApp';
import Images from '../../../assets/images';

const Layuot = ({image, title, subtitle, children}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* la parte inicial */}
        <View style={{padding: 20}}>
          <View>
            <Image
              source={Images.whiteLeftArrow}
              style={{width: 10, height: 20}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={image}
              style={{width: 40, height: 80}}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <TextApp.Default
              fontSize={20}
              fontWeight="bold"
              value={title}
              // color={colors.secondaryColor}
              color="white"
            />
            <TextApp.Default
              fontSize={12}
              value={subtitle}
              // color={colors.secondaryColor}
              color="white"
            />
          </View>
        </View>

        {/* la parte principal */}
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            paddingHorizontal: 20,
          }}>
          {children}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});

export default Layuot;
