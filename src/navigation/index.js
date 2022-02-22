import React, {useContext, useEffect} from 'react';
import UnauthenticatedNavigation from './UnauthenticatedNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import { AuthContext } from '../context/AuthContext';

const Navigation = () => {
    const { isLogin, userData } = useContext(AuthContext);

    useEffect(() => {
      console.log("user", isLogin);
    }, [isLogin]);
  
    if (!isLogin) return <UnauthenticatedNavigation />;
    if (isLogin) return <AuthenticatedNavigation />;

};

export default Navigation;