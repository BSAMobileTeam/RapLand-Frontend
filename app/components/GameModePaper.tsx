import React, { Component } from 'react'
import {
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
        this.radioButtonOnPressHandler = this.radioButtonOnPressHandler.bind(this)
    }

    radioButtonOnPressHandler(): void {
        const { status } = this.state

        this.setState({
            status: status === 'unchecked' ? 'checked' : 'unchecked'
        })
    }

    render() {
        const { name, description, backgroundUrl } = this.props
        const { status } = this.state

        return (
            <Card>
                <Card.Title title={name} subtitle={description} />
                <Card.Cover source={{ uri: backgroundUrl }} />
                <Card.Actions>
                    <RadioButton
                        value="this is the radio button value"
                        status={status}
                        onPress={this.radioButtonOnPressHandler}
                    />
                </Card.Actions>
            </Card>
        )
    }
}