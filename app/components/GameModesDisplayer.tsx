import React, { Component } from 'react'
import GameModePaper from './GameModePaper'
import {
    Col,
    Row,
    Grid
} from "react-native-easy-grid"
import IGameMode from '../../models/IGameMode'

import tempGameModes from '../../data-temp/tempGameModes'

import { 
    StyleSheet,
} from 'react-native';

interface IGameModesDisplayerProps {

}

interface IGameModesDisplayerStates {
    gameModes: IGameMode[][]
}


/**
 * Add grid to display several GameModePapers
 */

export default class GameModesDisplayer extends Component<IGameModesDisplayerProps, IGameModesDisplayerStates> {
    
    constructor (props: IGameModesDisplayerProps) {
        super(props)
        this.getGameModes = this.getGameModes.bind(this)
        this.state = {
            gameModes: this.getGameModes()
        }
    }

    getGameModes(): IGameMode[][] {
        //fetch data from server
        let gameModes: IGameMode[] = tempGameModes
        let splitedGameModes: IGameMode[][] = []
        for (let i = 0; i < gameModes.length; i+= 3) {
            splitedGameModes.push(gameModes.slice(i, i + 3))
        }
        // while (splitedGameModes[splitedGameModes.length - 1].length < 3) {
        //     // splitedGameModes[splitedGameModes.length - 1].push(null)
        // }            
        return splitedGameModes
    }

    render() {
        const { gameModes } = this.state
        return (
            <Grid>
                {
                    gameModes.map((gameModesGroup: IGameMode[], index: number) => (
                        <Row size={35} key={index}>
                            {
                                gameModesGroup.map((gameMode: IGameMode, index: number) => (
                                    <Col style={styles.col} key={index}>
                                        <GameModePaper
                                            name={gameMode.name}
                                            description={gameMode.description}
                                            backgroundUrl={gameMode.imageUrl}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    col: {
        height: 20
    }
})