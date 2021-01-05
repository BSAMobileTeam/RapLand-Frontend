import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import {
    Button,
    Card,
    RadioButton
} from 'react-native-paper'

interface IGameModePaperProps {
    name: string,
    description?: string,
    backgroundUrl: string
}

interface IGameModePaperStates {
    status: 'checked' | 'unchecked'
}

export default class GameModePaper extends Component<IGameModePaperProps, IGameModePaperStates> {
    constructor (props: IGameModePaperProps) {
        super(props)
        this.state = {
            status: 'unchecked'
        }
        this.onPressHandler = this.onPressHandler.bind(this)
    }

    onPressHandler(): void {
        const { status } = this.state

        this.setState({
            status: status === 'unchecked' ? 'checked' : 'unchecked'
        })
    }

    render() {
        const { name, description, backgroundUrl } = this.props
        const { status } = this.state

        return (
                <Card
                    style={styles.card}
                    onPress={this.onPressHandler}
                >
                    {/* <Button
                        onPress={this.onPressHandler}
                    > */}
                        <ImageBackground source={{ uri: backgroundUrl}} style={{width: '100%'}}>
                            <Card.Title title={name.toUpperCase()} subtitle={description} />
                            {/* <Card.Cover source={{ uri: backgroundUrl }} /> */}
                            <Card.Actions>
                                <RadioButton
                                    value={status}
                                    status={status}
                                    onPress={this.onPressHandler}
                                />
                            </Card.Actions>
                        </ImageBackground>
                    {/* </Button> */}
                </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 5,        
        borderRadius: 45
    }
})