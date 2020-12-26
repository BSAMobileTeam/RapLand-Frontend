import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Screen, Text, Button, SelectionnableButton } from '../components/index';

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button title='Ceci est un bouton' onPress={() => console.log("Button pressed")}/>
                <SelectionnableButton title='Bouton selectionnable'/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen;