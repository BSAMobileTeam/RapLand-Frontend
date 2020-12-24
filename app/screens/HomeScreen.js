import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Screen, Text } from '../components/index';

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen;