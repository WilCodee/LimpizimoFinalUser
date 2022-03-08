
import EStyleSheet from 'react-native-extended-stylesheet';



export default EStyleSheet.create(
    {
        container: {
            alignItems: 'center',
            backgroundColor: '$primaryColor',
            width: '100%',
            height: '100%'
        },
        title: {
            textAlign: 'center',
            paddingTop: 80,
            width: '50%',

            fontSize: 28,
            color: 'white',
            fontWeight: 'bold'
        },
        employeeBorderImage: {

            width: 205,
            height: 205,
            zIndex: 1,
        },
        employeeImage: {
            position: 'absolute',
            top: 9,

            width: 183,
            height: 183,
            borderRadius: 100,
        },
        employeeImageContainer: {
            marginTop: 30,
            position: 'relative',
            width: 170,
            height: 170,

        },
        name: {
            textAlign: 'center',
            paddingTop: 80,
            width: '100%',

            fontSize: 28,
            color: 'white',
            fontWeight: 'bold'
        },


    }

)