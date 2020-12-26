import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';

import Text from './AppText';
import colors from '../config/colors';

const id = "199965285154005"

logInFB = async () => {
    try {
        await Facebook.initializeAsync({
            appId: id,
        });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email', 'user_friends'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}

function AppNotLogged({ onConnect, onRegister }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logInFB}>
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