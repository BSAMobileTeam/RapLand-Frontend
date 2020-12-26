import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightBase, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppSelectionnableButton({title, onPress}) {
    const [pressed,setPressed] = useState(false);
    
    const styleOnPress = pressed ? styles.pressed: styles.notPressed

    return (
        <TouchableHighlight style={[styles.button, styleOnPress ]} onPress={() => {setPressed(!pressed); onPress}}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
} 

const styles = StyleSheet.create({
    button: {
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
    },
    pressed: {
        backgroundColor: colors.blue,
    },
    notPressed: {
        backgroundColor: colors.danger,
    }
})

export default AppSelectionnableButton;