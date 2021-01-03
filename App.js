import React, { useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import HomeScreen from './app/screens/HomeScreen';
import { Screen, AppLogged, AppNotLogged } from './app/components/index';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const netInfo = useNetInfo();

  return (
    <Screen>
      {isLogged ? 
        <AppLogged username='Kasket' experience='300' /> : 
        (netInfo.type !== 'unknown' && netInfo.isInternetReachable === true) ?
        <AppNotLogged onConnect={() => setIsLogged(true)} onRegister={() => console.log("register")}/> :
        <></>
      }
      <HomeScreen />
    </Screen>
  );
}
