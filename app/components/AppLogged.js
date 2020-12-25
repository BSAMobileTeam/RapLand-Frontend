import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import { Text } from '../components/index';
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
        backgroundColor: colors.medium,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        paddingLeft: 5,
    },
    experience: {
        paddingRight: 5,
        color: colors.danger,
    }
});

export default AppLogged;