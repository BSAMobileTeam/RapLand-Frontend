import React, { Component } from 'react'

import GameModePaper from './GameModePaper'

interface IGameModesDisplayerProps {

}

interface IGameModesDisplayerStates {

}

/**
 * Add grid to display several GameModePapers
 */

export default class GameModesDisplayer extends Component<IGameModesDisplayerProps, IGameModesDisplayerStates> {
    
    constructor (props: IGameModesDisplayerProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <GameModePaper
                name="RAP US"
                backgroundUrl="https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/a22b7179-b241-4262-93fc-e821caaf5e5c/801x410_gettyimages-640370224.jpg"
                description="Quizz sur du rap us"
            />
        )
    }
}