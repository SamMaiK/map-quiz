import React from 'react'
import {Message} from 'semantic-ui-react'
import '../styles/CurrentCityPanel.css'

const CurrentCityPanel = ({children}) => {
    return (
        <div className="current-city-panel">
            <Message compact>
                {children}
            </Message>
        </div>
    )
};

export default CurrentCityPanel