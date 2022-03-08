import { StyleSheet } from 'react-native';


export default StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            backgroundColor: '#5f2490',


        },
        backButton: {
            alignSelf: 'flex-start',
            marginLeft: 15,
            marginTop: 5
        },

        card: {
            marginTop: 20,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingBottom: 20,
            width: '100%',
            backgroundColor: 'white'
        },
        textDescription: {
            color: '#767676', alignSelf: 'flex-start', fontSize: 15,
            marginLeft: 10,
        }
    }

)