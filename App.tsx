import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper'
import QuestionPaper from './app/components/QuestionPaper'
import {
    getRandomQuestion
} from './data-temp/question'

export default function App() {
    return (
        <PaperProvider>
            <QuestionPaper
                question={getRandomQuestion()}
            />
     
        </PaperProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
