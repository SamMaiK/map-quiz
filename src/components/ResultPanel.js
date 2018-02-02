import React from 'react'
import {Message} from 'semantic-ui-react'
import '../styles/ResultPanel.css'

const ResultPanel = ({children, positive, negative}) => {
    return (
        <div>
            <Message
                positive={positive}
                negative={negative}
            >
                <p className="text-align-center">
                    {positive && <span className="accent">Correct:</span>}
                    {negative && <span className="accent">Wrong:</span>}
                    {children}
                </p>
            </Message>
        </div>
    )
};

export default ResultPanel