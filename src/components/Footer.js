import React from 'react'
import {Button} from 'semantic-ui-react'
import '../styles/Footer.css'

const Footer = ({applySelection, disableFooterButton, showResult, nextCity, gameOver, startNewGame}) => {
    if (gameOver) {
        return (
            <div className="end-game-footer">
                <h1>GAME OVER</h1>
                <Button onClick={startNewGame}>Click here to start new game</Button>
            </div>
        )
    }
    return (
        <div className="footer">
            {showResult ?
                <Button onClick={nextCity}>Next city</Button> :
                <Button onClick={applySelection} disabled={disableFooterButton}>Apply selection</Button>
            }
        </div>
    )
};

export default Footer
