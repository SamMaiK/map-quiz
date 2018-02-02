import React from 'react'
import '../styles/InfoPanel.css'
import InfoCard from './InfoCard';
import CurrentCityPanel from './CurrentCityPanel';
import ResultPanel from './ResultPanel';

const InfoPanel = ({correctSelections, kilometersLeft, currentCity, showResult, resultDistance}) => {
    return (
        <div className="info-panel">
            <div className="cards-panel">
                <InfoCard>{`${correctSelections} correct selections`}</InfoCard>
                <InfoCard>{`${kilometersLeft} kilometers left`}</InfoCard>
            </div>
            {showResult ?
                <ResultPanel
                    positive={resultDistance <= 50000}
                    negative={resultDistance > 50000}
                >{`Distance to the right location is ${Math.floor(resultDistance / 1000)} km`}</ResultPanel> :
                <CurrentCityPanel>{`Select the location of "${currentCity}"`}</CurrentCityPanel>
            }
        </div>
    )
};

export default InfoPanel