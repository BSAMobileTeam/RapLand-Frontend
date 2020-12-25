import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../components/index';
import colors from '../config/colors';


function AppNotLogged({ onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Se connecter</Text>
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
    },
    button: {
        backgroundColor: colors.medium,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
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