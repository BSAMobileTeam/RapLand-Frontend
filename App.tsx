import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
    Provider as PaperProvider,
    Button
} from 'react-native-paper';
import QuestionPaper from './app/components/QuestionPaper';
import {
    getRandomQuestion
} from './data-temp/question';
import IQuestion from './models/IQuestion';
import { Screen } from './app/component/index';

interface IAppState {
    question: IQuestion
}

export default class App extends Component<{}, IAppState> {
    constructor (props) {
        super(props)
        this.state = {
            question: getRandomQuestion()
        }
    }

    render() {
        const { question } = this.state
        return (
            <Screen>
              <PaperProvider>
                  <QuestionPaper
                      style={styles.questionPaper}
                      question={question}
                  />
                  <Button
                      mode="contained"
                      onPress={() => {
                          this.setState({
                              question: getRandomQuestion()
                          })
                      }}
                      style={{
                          width: '50%',
                          borderRadius: 20,
                          marginLeft: '25%',
                          marginTop: 60
                      }}
                  >
                      Suivant
                  </Button>
              </PaperProvider>
            </Screen>
        )
    }
};