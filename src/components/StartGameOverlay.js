import React from 'react'
import {Dimmer, Header, Button} from 'semantic-ui-react'
import '../styles/StartGameOverlay.css'

const StartGameOverlay = ({gameStart, closeStartOverlay}) => {
    return (
        <Dimmer
            active={gameStart}
            onClickOutside={closeStartOverlay}
            page
        >
            <Header inverted>
                <h2 className="margin-5">Map-Quiz Game Rules:</h2>
                <Header.Subheader>
                    <p>You should select the right position of the city on a map.</p>
                    <p>Click to put a marker on it.</p>
                    <p>After selection click on 'Apply selection' button.</p>
                    <p>The game will show you the right location and amount of kilometers between the city and your
                        marker.</p>
                    <p>If the distance will be more than 50km - your score will be reduced for the difference
                        amount.</p>
                    <p>The game ends when you get 0km left.</p>
                </Header.Subheader>
                <Button className="margin-5" onClick={closeStartOverlay}>START GAME</Button>
            </Header>
        </Dimmer>
    )
};

export default StartGameOverlay