import { Dimensions, StyleSheet } from 'react-native';
const deviceHeight = Dimensions.get('screen').height;



export default StyleSheet.create({
  container: {
    backgroundColor: '#5f2490', flexDirection: 'column'
  },

  probando: {

  },

  containerName: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 170,
    marginBottom: 10
  },

  containerCard: {
    width: '100%',
    height: '100%',
    margin: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    zIndex: -1
  },

  containerAvatar: {
    position: 'absolute',
    top: -80,
    left: 5,
    zIndex: 999
  },

  containerLimpipuntos: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 60,
    height: 35,
    marginTop: 40,
    backgroundColor: '#68c530',
    width: 310,
    marginBottom: 10
  },

  textLimpipuntos: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
  },

  numberLimpipuntos: {
    paddingLeft: 120,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  name: {
    color: '#fff', fontSize: 20, transform: ([{ translateY: 0 }])
  },

  containerInput: {
    marginLeft: 0,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#5f2490',
    borderRadius: 30,
    width: '100%',
    height: 42,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    margin: 12,
    width: 240
  },

  containerChangePass: {
    marginTop: 10,
    height: 42,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#5f2490',
    width: '85%',
    marginBottom: 2,
  },

  textChangePass: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  textBold: {
    paddingRight: 80,
    marginRight: 54,
    marginLeft: 0,
  },

  inputName: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 200,
    fontSize: 13,
  },
  inputLastName: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 200,
    fontSize: 13,
  },
  inputEmail: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 145,
    fontSize: 13,
  },
  inputPhone: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 160,
    fontSize: 13,
  },
  inputDate: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 135,
    fontSize: 13,
  },
  inputSex: {
    fontWeight: 'bold',
    color: '#767676',
    paddingRight: 225,
    fontSize: 13,
  },
  pickerStyles: {
    height: 100,
    width: 260,
    color: '#828282',
    fontSize: 3,
    paddingLeft: 10,
    marginLeft: 10,
  },
  containerLogout: {
    marginBottom: 2,

    height: 42,
    borderRadius: 60,
    borderColor: '#5f2490',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    width: '85%',

  },
  containerCancel: {
    marginTop: 50,
    height: 42,
    borderRadius: 60,
    borderColor: '#5f2490',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    width: '85%',

  },
})