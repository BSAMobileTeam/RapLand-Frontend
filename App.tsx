import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
    Provider as PaperProvider,
    Button
} from 'react-native-paper';
import {
    getRandomQuestion
} from './data-temp/question';
import IQuestion from './models/IQuestion';
import { Screen, QuestionPaper } from './app/components/index';

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
            <Screen style={styles.container}>
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
                      style={styles.button}
                  >
                  </Button>
              </PaperProvider>
            </Screen>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionPaper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%'
  },
  button: {
    width: '50%',
    borderRadius: 20,
    marginLeft: '25%',
    marginTop: 60
  }
});