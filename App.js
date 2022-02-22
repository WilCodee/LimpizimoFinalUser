import React from 'react';
import { NativeBaseProvider} from "native-base";
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
const App = () => {
  return (
    <SafeAreaProvider>
    <NativeBaseProvider>
      <AuthProvider>
      <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
