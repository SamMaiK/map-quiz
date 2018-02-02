import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {compose, withProps} from 'recompose'
import '../styles/Map.css'

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div className="loading-element"/>,
        containerElement: <div className="container-element"/>,
        mapElement: <div className="map-element"/>,

    }),
    withScriptjs,
    withGoogleMap
)(({showMarker, setMarkerPosition, markerPosition, showResult}) => {
    return (
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{lat: 48.12, lng: 11.54}}
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

export default Map

