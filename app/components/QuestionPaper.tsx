import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
    StyleSheet,
    StyleProp,
    ViewStyle
} from 'react-native';
import { 
    Paragraph,
    Button,
    Surface
} from 'react-native-paper'
import IQuestion from '../../models/IQuestion'

interface IQuestionPaperProps {
    style: StyleProp<ViewStyle>,
    question: IQuestion
}

export default class QuestionPaper extends Component<IQuestionPaperProps, {}> {
    constructor (props: IQuestionPaperProps) {
        super(props)
    }

    render() {
        const { style, question } = this.props
        return (
            <Surface style={[styles.surface, style]}>
                <Paragraph style={styles.paragraph}>{question.question.intitule}</Paragraph>
                {
                    question.question.choix.map((choice, index) => (
                        <Button
                            style={styles.button}
                            mode="contained"                            
                            key={index}
                            onPress={() => {}}
                        >
                            {choice}
                        </Button>
                    ))
                }
            </Surface>
        )
    }
}

const styles = StyleSheet.create({
    surface: {        
        minHeight: '45%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        borderRadius: 42
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: '10%'
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
        minWidth: '50%',
        borderRadius: 15
    }
})