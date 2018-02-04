import React from 'react'
import PropTypes from 'prop-types'
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

CurrentCityPanel.propTypes = {
    children: PropTypes.string
};

export default CurrentCityPanel