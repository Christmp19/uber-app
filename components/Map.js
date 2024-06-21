import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        // Zoom & fit to markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${encodeURIComponent(origin.description)}&destinations=${encodeURIComponent(destination.description)}&key=${GOOGLE_MAPS_APIKEY}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                if (data.rows.length > 0 && data.rows[0].elements.length > 0) {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                } else {
                    throw new Error('No travel data available');
                }
            } catch (error) {
                console.error('Error fetching travel time:', error);
            }
        };

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);

    return (
        <MapView
            ref={mapRef}
            className='flex-1'
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor='black'
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Destination'
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})