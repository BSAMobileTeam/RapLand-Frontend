import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Screen, Button, SelectionnableButton } from '../components/index';

function tets(a, b) {
    console.log(a + " : " + b);
    console.log('test');
}

function TestScreen(props) {
    const [choix1,setChoix1] = useState(false);
    const [choix2,setChoix2] = useState(false);
    return (
        <Screen>
            <View style={styles.container}>
                <Button title='Ceci est un bouton' onPress={() => tets(choix1, choix2)}/>
                <SelectionnableButton title='Bouton selectionnable' onPress={() => setChoix1(true)}/>
                <SelectionnableButton title='Bouton selectionnable' onPress={() => setChoix2(true)}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default TestScreen;