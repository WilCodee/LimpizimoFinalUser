import React from 'react'; 
import { Overlay } from 'react-native-elements';
//import { useDispatch, useSelector } from 'react-redux';
import { hideOverlay } from '../../store/actions/overlay';
import {View} from 'react-native';

const Default = () => {
    //const dispatch = useDispatch()
    //const overlayStore = useSelector(state => state.overlay);
    
    const toggleOverlay = () => {
        console.log('overlay')
        //dispatch(hideOverlay())
    }

    return(
        <Overlay isVisible={false} onBackdropPress={toggleOverlay}>
            <View style={{margin: 20, justifyContent:'center', height: 80, width: 80, alignItems:'center' }}>
                
            </View>
        </Overlay>
    )
}

export default Default; 