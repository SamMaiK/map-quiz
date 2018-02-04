import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'semantic-ui-react'
import '../styles/InfoCard.css'

const InfoCard = ({children}) => {
    return (
        <Card className="info-card">
            <Card.Content textAlign="center">
                {children}
            </Card.Content>
        </Card>
    )
};

InfoCard.propTypes = {
    children: PropTypes.string
};

export default InfoCard