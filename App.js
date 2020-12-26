import React, { useState } from 'react';
import { Screen, Text} from './app/components/index';
import HomeScreen from './app/screens/HomeScreen';
import { AppLogged, AppNotLogged } from './app/components/index';
import TestScreen from './app/screens/TestScreen';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Screen>
      {isLogged ? <AppLogged username='Kasket' experience='300' /> : <AppNotLogged onConnect={() => setIsLogged(true)} onRegister={() => console.log("register")}/>}
      <TestScreen />
    </Screen>
  );
}

