import React from 'react';
import {View} from 'react-native'

const MainContainer = ({ marginLeft=4, marginRight=4, marginTop=28, marginBottom=8, children}) => {
    return(
        <View style={{ marginLeft, marginRight, marginTop, marginBottom }}  >
            {children}
        </View>
    )
}

export default MainContainer;