import React from 'react';
import {View} from 'native-base';
import {Image} from 'react-native';
import colors from '../../constants/colors';
import TextApp from '../../components/TextApp';
import {Icon} from 'react-native-elements';
import MenuApp from '../../components/MenuApp';
import ImageUserProfile from '../../components/ImageUserProfile';

const InternalContainer = ({
  children,
  iconName,
  iconType,
  iconColor,
  title,
  titleFontSize = 25,
  titleFontWeight,
  subtitle,
  subTitleFontSize = 15,
  subTitleFontWeight,
  subSubTitle,
  subSubTitleFontSize = 10,
  subtitleTextAlign,
  image,
  collaboratorProfile,
  specialIcon,
  childrenContainerColor = colors.mainColorLight,
  containerColor = colors.primaryColor,
}) => {
  return (
    <View height="full" background={containerColor}>
      <MenuApp.Default title="" />

      <View
        backgroundColor={containerColor}
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

        {collaboratorProfile && <ImageUserProfile {...collaboratorProfile} />}

        {specialIcon && (
          <Image
            source={specialIcon}
            resizeMode="contain"
            style={{width: 60, height: 80}}
          />
        )}

        {iconName && (
          <Icon size={60} name={iconName} type={iconType} color={iconColor} />
        )}
        {title && (
          <TextApp.Default
            fontSize={titleFontSize}
            color="white"
            value={title}
            fontWeight={titleFontWeight}
          />
        )}
        {subtitle && (
          <TextApp.Default
            color="white"
            value={subtitle}
            fontSize={subTitleFontSize}
            fontWeight={subTitleFontWeight}
            textAlign={subtitleTextAlign}
          />
        )}
        {subSubTitle && (
          <TextApp.Default
            color="white"
            value={subSubTitle}
            fontSize={subSubTitleFontSize}
          />
        )}
      </View>
      <View
        borderTopRadius={25}
        backgroundColor={childrenContainerColor}
        height="full"
        flex={1}>
        {children}
      </View>
    </View>
  );
};

export default InternalContainer;
