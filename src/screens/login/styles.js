import { Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('screen').height;



export default {
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    head:{
      alignItems: "center",
      justifyContent: "center",
    },
   
    inputView: {
      marginLeft: 0,
      borderWidth:  2,
      backgroundColor: "white",
      borderColor: '#5f2490',
      borderRadius: 30,
      width: "80%",
      height: 42,
      marginBottom: 2,
      alignItems: "center",
      justifyContent: "center",
    },
   
    TextInput: {
      /* height: 50,
      flex: 0,
      padding: 10,
      marginLeft: 20, */
      paddingRight:90,
      fontSize:13
    },
   
    forgot_button: {
      paddingTop:5,
      fontSize:11,
      color: '#80868E',
      flex:0,
      height: 30,
      marginBottom: 0,
      textAlign: "center",
      justifyContent: "center",
    },
   
    loginBtn: {
     
      borderRadius: 60,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      backgroundColor: `#5f2490`,
      width: "65%",
    },
    loginBtnFacebook:{
     
        flexDirection:'row',
        borderRadius: 60,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: '#3b5998',
        width: "65%"
    },
    loginBtnGoogle:{
     
        flexDirection:'row',
        borderRadius: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: '#db3236',
        width: "65%",
        marginBottom: 10,
    },


    loginText:{
        color:'white',
        fontWeight: 'bold',
        fontSize:18,
    },

    loginTextFacebook:{
      color:'white',  
  },
  loginTextGoogle:{
    color:'white',  
},

    textBold:{
      paddingRight:80,
      marginRight:54,
      marginLeft:0,
      fontSize: 13,
    },
    passTitle:{
      paddingRight:80,
      marginRight:90,
      marginLeft:0,
      fontSize: 13,
  },
    title:{
      
      marginTop:50,
      fontWeight: 'bold',
      color: '#5f2490',
      fontSize: 23,
    },
    subtitle:{
      
      marginBottom:20,
      fontSize: 12,
     
    },
    error: {
      fontSize: 14,
    color: 'red',
    paddingHorizontal: 4,
    paddingTop: 4,
    },
  }