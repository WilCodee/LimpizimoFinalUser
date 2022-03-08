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
    backButton: {
      alignSelf: 'flex-start',
      marginLeft: 15,
      marginTop: 25
  },
    inputView: {
    
      marginLeft: 0,
      borderWidth:  2,
      backgroundColor: "white",
      borderColor: '#5f2490',
      borderRadius: 30,
      
      height: 42,
      marginBottom: 2,
      alignItems: "center",
      justifyContent: "center",
    },
   
    TextInput: {
        height: 40,
        margin: 12,
        width:240
    },
   
    termsButton: {
      paddingTop:5,
      fontSize:11,
      color: 'gray',
      flex:0,
      height: 30,
      marginBottom: 0,
      textAlign: "center",
      justifyContent: "center",
      textDecorationLine: 'underline'
    },
   
    registerBtn: {
      height: 42,
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop:20,
      backgroundColor: `#5f2490`,
      width: "65%",
      marginBottom:30,
    },
    register:{
        color:'white',
        fontWeight: 'bold',
        fontSize:18,
        
        
    },
    textBold:{
      paddingRight:80,
      marginRight:54,
      marginLeft:0,
      
      
    },
    nameTitle:{
      paddingRight:200,   
      fontSize: 13,
  },
    lastNameTitle:{
      paddingRight:200,   
      fontSize: 13,
  },
  emailTitle:{
    paddingRight:145,   
    fontSize: 13,
},
  passwordTitle:{
    paddingRight:183,   
    fontSize: 13,
  },
  repasswordTitle:{
    paddingRight:124,   
    fontSize: 13,
  },
  phoneTitle:{
    paddingRight:158,   
    fontSize: 13,
  },
  dateTitle:{
    paddingRight:125,   
    fontSize: 13,
  },
  sexTitle:{
    paddingRight:219,   
    fontSize: 13,
  },
    title:{
      marginTop:25,
      fontWeight: 'bold',
      color: '#5f2490',
      fontSize: 23,
    },
    subtitle:{
      
      marginBottom:20,
      fontSize: 12,
     
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,
        alignItems: "center",
        justifyContent: "center",
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        fontSize: 10,
      },
      error: {
        fontSize: 14,
      color: 'red',
      paddingHorizontal: 4,
      paddingTop: 2,
      },
  }