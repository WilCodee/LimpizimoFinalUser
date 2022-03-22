import React from 'react';
import {View, Text} from 'native-base'; 
import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors'; 
import TextApp from '../../components/TextApp';
import { Icon } from 'react-native-elements';
import MenuApp from '../../components/MenuApp';

const InternalContainer = ({children, iconName, iconType, iconColor, title, subtitle, navigation}) => {
    return(
        <View 
            height="full"
            background={Colors.primaryColor}
        >
        
        <MenuApp.Default title="" navigation={navigation} />

        <View 
        backgroundColor={ Colors.primaryColor } 
        height={160}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
            {iconName && 
            <Icon
                size={60}
                name={iconName} 
                type={iconType}
                color={iconColor}
            />
            }
            {title && 
                <TextApp.Default 
                color='white' 
                value={title}
                fontSize={25}
                />
            }
            {subtitle && 
                <TextApp.Default
                color="white"
                value={subtitle}
                fontSize={15}
                />
            }
        </View>
        <View 
        borderTopRadius={25} 
        backgroundColor="white"
        height="full"
        flex={1}
        >
            {children}
        </View>
        </View>
    )
}

export default InternalContainer; 