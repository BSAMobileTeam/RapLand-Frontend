import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../components/index';
import colors from '../config/colors';


function AppNotLogged({ onConnect, onRegister }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <Text style={styles.text}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onRegister}>
                <Text style={styles.text}>S'enregister</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        minHeight: 40,
        backgroundColor: colors.medium,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: colors.medium,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppNotLogged;