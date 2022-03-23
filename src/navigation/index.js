import React, {useContext, useEffect} from 'react';
import UnauthenticatedNavigation from './UnauthenticatedNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import { AuthContext } from '../context/AuthContext';
import { postData } from '../utils/fetch/postData';

const Navigation = () => {
    const { isLogin, userData, login } = useContext(AuthContext);


    /*const doLogin = async () => {
      const data = { email: 'pablotrujilloelo@gmail.com', password: '123123' }
      const loginRequest = await postData('authentication/client/login', data) 
      if(loginRequest.OK){
        const currentUser = loginRequest.user
        login(currentUser)
      }else{
        Alert.alert('Credenciales incorrectas')
      }
    }

    useEffect(() => {
      doLogin()
      console.log("user", isLogin);
    }, [isLogin]);*/
  
    if (!isLogin) return <UnauthenticatedNavigation />;
    if (isLogin) return <AuthenticatedNavigation />;

};

export default Navigation;