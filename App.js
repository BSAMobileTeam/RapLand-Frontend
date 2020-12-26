import React, { useState } from 'react';

import HomeScreen from './app/screens/HomeScreen';
import { Screen, AppLogged, AppNotLogged } from './app/components/index';
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

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