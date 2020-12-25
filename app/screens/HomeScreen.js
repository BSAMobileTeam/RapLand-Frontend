import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Screen, Text, Button } from '../components/index';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button title='Ceci est un bouton' onPress={() => console.log("Button pressed")}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen;