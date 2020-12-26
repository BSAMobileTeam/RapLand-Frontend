import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './AppText';
import defaultStyles from '../config/styles';

function AppLogged({ username, experience}) {
    return (
        <View style={styles.container}>
            <Text style={[defaultStyles.text, styles.username]}>{username}</Text>
            <Text style={[defaultStyles.text, styles.experience]}>{experience}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        minHeight: 40,
        backgroundColor: defaultStyles.colors.medium,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        paddingLeft: 5,
    },
    experience: {
        paddingRight: 5,
        color: defaultStyles.colors.danger,
    }
});

export default AppLogged;