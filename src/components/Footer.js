import React from 'react'
import {Button} from 'semantic-ui-react'
import '../styles/Footer.css'

const Footer = ({applySelection, disableFooterButton, showResult, nextCity, gameOver}) => {
    if (gameOver) {
        return (
            <div className="footer">
                <h1>GAME OVER</h1>
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
