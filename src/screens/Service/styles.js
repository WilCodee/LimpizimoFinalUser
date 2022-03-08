import { StyleSheet } from 'react-native';


export default StyleSheet.create(
    {
        container: {

            alignItems: 'center',
            backgroundColor: '#5f2490',
            height: '100%',
        },
        backButton: {
            alignSelf: 'flex-start',
            marginLeft: 15,
            marginTop: 5
        },
        title: {
            fontSize: 19,
            fontWeight: 'bold',
            color: '#fff'
        },

        subTitle: {
            fontSize: 11,
            color: '#fff'
        },
        card: {
            marginTop: 20,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            height: '100%',
            width: '100%',
            backgroundColor: '#fff'
        },
        home: {
            alignSelf: 'center',
            color: '#5f2490',
            fontSize: 18,
            margin: 10
        },
        sizeClean: {
            fontSize: 12, color: '#5f2490', fontWeight: 'bold',
            paddingLeft: 15
        },
        hoursClean: {
            padding: 2,
            fontWeight: 'bold',
            fontSize: 11,
            color: 'white',
            textAlign: 'center',
            borderRadius: 60,
            height: 20,
            backgroundColor: '#68c530',
            width: 80,
        }
    }
)