import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import styled from 'styled-components';

const StyledMapView = styled(MapView)`
  
`

// Need to figure out how to control the size of the map, not sure if it can be styled like a normal view

export default function Map({ markers }) {
  return(
    <MapView style={{...StyleSheet.absoluteFillObject}}>
      {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.latlng}
            title={marker.title}
          />
        ))}
    </MapView>
  );
}