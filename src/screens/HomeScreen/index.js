import React from 'react'; 
import {View, Button} from 'react-native'
import BingMapsView from 'react-native-bing-maps';
import { AuthContext } from '../../context/AuthContext';


const HomeScreen = () => {
  const {logout} = React.useContext( AuthContext)
  const [lat, setLat] = React.useState(-2.170998)
  const [long, setLong] = React.useState(-79.922356)

  const changeLocation = () => {
    if(lat===-0.180653 && long===-78.467834){
      setLat(-2.170998)
      setLong(-79.922356)
      return; 
    }
    setLat(-0.180653)
    setLong(-78.467834)
  }
  
  return(
        <View>
            <Button title="HOME SCREEN" />
            <View >
            <BingMapsView
                credentialsKey="Ah4kVH3BsgdiHqEYMww44hbC7XVhH9KqJ6Hq0LdsjNfyz3F5HA24gpVAhGAIVBA6"
                mapLocation={{ lat:lat, long: long, zoom: 15 }}
                style={{ height: 400, width: 600 }}
            />

            <Button onPress={changeLocation} title='Change Location' />

            <Button onPress={logout} title='LOGOUT' />
            </View>
        
        </View>
    )
}

export default HomeScreen