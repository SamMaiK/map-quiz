/* global google */

import React, {Component} from 'react';
import '../styles/App.css';
import Map from './Map'
import InfoPanel from './InfoPanel'
import Footer from './Footer'
import dataForGame from '../capitalCities.json'
import StartGameOverlay from './StartGameOverlay'


const initialState = {
    gameStart: true,
    gameOver: false,
    showMarker: false,
    showResult: false,
    currentCityIndex: 0,
    correctSelections: 0,
    kilometersLeft: 1500,
    resultDistance: 0,
    mapZoom: 4,
    mapCenter: {
        lat: 48.12,
        lng: 11.54
    },
    markerPosition: {
        lat: 0,
        lng: 0
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.cities = dataForGame.capitalCities;
        this.state = initialState;
    }

    setMarkerPosition = (lat, lng) => {
        this.setState({
            showMarker: true,
            markerPosition: {lat, lng}
        })
    };

    applySelection = () => {
        const city = this.cities[this.state.currentCityIndex];
        const {markerPosition} = this.state;
        const rightLocation = new google.maps.LatLng(city.lat, city.long);
        const markerLocation = new google.maps.LatLng(markerPosition.lat, markerPosition.lng);
        const distance = google.maps.geometry.spherical.computeDistanceBetween(rightLocation, markerLocation);
        this.showAnswer(distance);
    };

    showAnswer = (distance) => {
        const city = this.cities[this.state.currentCityIndex];
        if (distance > 50000 && this.state.kilometersLeft - Math.floor(distance / 1000) <= 0) {
            return this.setState({
                showResult: true,
                resultDistance: distance,
                kilometersLeft: 0,
                markerPosition: {
                    lat: parseFloat(city.lat),
                    lng: parseFloat(city.long)
                },
                mapCenter: new google.maps.LatLng(city.lat, city.long),
                mapZoom: 5,
                gameOver: true
            })
        }
        this.setState((prevState) => ({
            showResult: true,
            resultDistance: distance,
            correctSelections: distance < 50000 ?
                prevState.correctSelections + 1 :
                prevState.correctSelections,
            kilometersLeft: distance > 50000 ?
                prevState.kilometersLeft - Math.floor(distance / 1000) :
                prevState.kilometersLeft,
            markerPosition: {
                lat: parseFloat(city.lat),
                lng: parseFloat(city.long)
            },
            mapCenter: new google.maps.LatLng(city.lat, city.long),
            mapZoom: 5,
        }));
    };

    nextCity = () => {
        this.setState((prevState) => ({
            showResult: false,
            showMarker: false,
            currentCityIndex: this.cities.length === prevState.currentCityIndex + 1 ?
                0 : prevState.currentCityIndex + 1,
            mapCenter: initialState.mapCenter,
            mapZoom: initialState.mapZoom,
        }))
    };

    closeStartOverlay = () => {
        this.setState({gameStart: false})
    };

    startNewGame = () => {
        this.setState(initialState);
    };

    setMap = (map) => {
        this.map = map;
    };

    render() {
        const {setMarkerPosition, cities, applySelection, nextCity, closeStartOverlay, startNewGame, setMap} = this;
        const {
            showMarker,
            markerPosition,
            correctSelections,
            kilometersLeft,
            currentCityIndex,
            showResult,
            resultDistance,
            gameOver,
            gameStart,
            mapCenter,
            mapZoom
        } = this.state;
        return (
            <div className="App">
                <InfoPanel
                    correctSelections={correctSelections}
                    kilometersLeft={kilometersLeft}
                    currentCity={cities[currentCityIndex].capitalCity}
                    showResult={showResult}
                    resultDistance={resultDistance}
                />
                <Map
                    showMarker={showMarker}
                    markerPosition={markerPosition}
                    setMarkerPosition={setMarkerPosition}
                    showResult={showResult}
                    onMapMounted={setMap}
                    center={mapCenter}
                    zoom={mapZoom}
                />
                <Footer
                    applySelection={applySelection}
                    disableFooterButton={showResult || !showMarker}
                    showResult={showResult}
                    nextCity={nextCity}
                    gameOver={gameOver}
                    startNewGame={startNewGame}
                />
                <StartGameOverlay
                    gameStart={gameStart}
                    closeStartOverlay={closeStartOverlay}
                />
            </div>
        );
    }
}

export default App;
