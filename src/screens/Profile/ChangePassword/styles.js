import { Dimensions,StyleSheet} from 'react-native';
const deviceHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
    changePassTitle:{
        fontWeight: 'bold',
        fontSize: 22,
        color:'#767676'
    },
    inputPassword:{
        marginLeft:35,   
        fontSize: 13,
        alignSelf:'flex-start',
        fontWeight: 'bold',
        color:'#767676'
        
      },
    containerInput: {
        marginLeft: 0,
        backgroundColor: 'white',
        borderRadius: 30,
        width: '90%',
        height: 42,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#E7E6E6'
      },
      textInput: {
        height: 40,
        margin: 12,
        width:240,
        marginRight:50,
        fontSize:13,
    },
    AceptTextButton:{
        color:'white',
        fontWeight: 'bold',
        fontSize:18,   
    },
    containerAceptButton: {
        height: 42,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
        backgroundColor: '#5f2490',
        width: '65%',
        marginBottom:2,
      },
})