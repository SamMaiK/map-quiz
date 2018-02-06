import React from 'react'
import PropTypes from 'prop-types'
import '../styles/InfoPanel.css'
import InfoCard from './InfoCard';
import CurrentCityPanel from './CurrentCityPanel';
import ResultPanel from './ResultPanel';

const InfoPanel = ({correctSelections, kilometersLeft, currentCity, showResult, resultDistance, highScore}) => {
    return (
        <div className="info-panel">
            <div className="cards-panel">
                <InfoCard>{`${correctSelections} correct selections`}</InfoCard>
                <InfoCard>{`Highscore: ${highScore}`}</InfoCard>
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

InfoPanel.propTypes = {
    correctSelections: PropTypes.number,
    kilometersLeft: PropTypes.number,
    currentCity: PropTypes.string,
    showResult: PropTypes.bool,
    resultDistance: PropTypes.number,
    highScore: PropTypes.number
};

export default InfoPanel