import React from 'react';
import {View, Text} from 'native-base';
import {Image} from 'react-native';
import Colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import {Icon} from 'react-native-elements';
import MenuApp from '../../components/MenuApp';

const InternalContainer = ({
  children,
  iconName,
  iconType,
  iconColor,
  title,
  subtitle,
  image,
}) => {
  return (
    <View height="full" background={Colors.primaryColor}>
      <MenuApp.Default title="" />

      <View
        backgroundColor={Colors.primaryColor}
        height={160}
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        {image && (
          <Image
            source={{uri: image}}
            resizeMode="cover"
            style={{width: 120, height: 120, borderRadius: 60}}
          />
        )}
        {iconName && (
          <Icon size={60} name={iconName} type={iconType} color={iconColor} />
        )}
        {title && <TextApp.Default color="white" value={title} fontSize={25} />}
        {subtitle && (
          <TextApp.Default color="white" value={subtitle} fontSize={15} />
        )}
      </View>
      <View borderTopRadius={25} backgroundColor="white" height="full" flex={1}>
        {children}
      </View>
    </View>
  );
};

export default InternalContainer;
