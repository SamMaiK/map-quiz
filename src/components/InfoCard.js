import React from 'react'
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

export default InfoCard