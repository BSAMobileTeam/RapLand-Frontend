import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper'
import IQuestion from '../../models/IQuestion'

interface IQuestionPaperProps {
    question: IQuestion
}

export default class QuestionPaper extends Component<IQuestionPaperProps, {}> {
    constructor (props: IQuestionPaperProps) {
        super(props)
    }

    render() {
        return (
            <Title>This is a title for RapJeu</Title>
        )
    }
}
