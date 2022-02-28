import React from 'react';
import { NativeBaseProvider} from "native-base";
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { NewServiceProvider } from './src/context/NewServiceContext';
const App = () => {
  return (
    <SafeAreaProvider>
    <NativeBaseProvider>
      <AuthProvider>
        <NewServiceProvider>
          <Navigation />
      </NewServiceProvider>
      </AuthProvider>
    </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
