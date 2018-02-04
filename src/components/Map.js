import React from 'react'
import PropTypes from 'prop-types'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {compose, withProps} from 'recompose'
import '../styles/Map.css'

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGuFSRRm2bip9-3k6M2OXJzr4_vaXkrDk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div className="loading-element"/>,
        containerElement: <div className="container-element"/>,
        mapElement: <div className="map-element"/>,
    }),
    withScriptjs,
    withGoogleMap
)(({showMarker, setMarkerPosition, markerPosition, showResult, onMapMounted, zoom, center}) => {
    return (
        <GoogleMap
            ref={onMapMounted}
            zoom={zoom}
            center={center}
            options={{
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
                styles: [
                    {
                        featureType: 'administrative',
                        elementType: 'labels',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'all',
                        elementType: 'labels',
                        stylers: [{visibility: 'off'}]
                    }
                ]
            }}
            onClick={({latLng}) => {
                if (!showResult) setMarkerPosition(latLng.lat(), latLng.lng())
            }}
        >
            {showMarker &&
            <Marker
                defaultClickable={false}
                position={
                    {
                        lat: markerPosition.lat,
                        lng: markerPosition.lng
                    }
                }
            />
            }
        </GoogleMap>
    )
});

Map.propTypes = {
    showMarker: PropTypes.bool,
    setMarkerPosition: PropTypes.func,
    markerPosition: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    showResult: PropTypes.bool,
    onMapMounted: PropTypes.func,
    zoom: PropTypes.number,
    center: PropTypes.any
};

export default Map

