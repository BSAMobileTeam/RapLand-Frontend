import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color = "blue" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        width: '75%',
        marginVertical: 10,
    },
    text: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;