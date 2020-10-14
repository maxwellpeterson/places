import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import styled from 'styled-components';

const StyledMapView = styled(MapView)`
  flex: 1;
`

export default function Map({ markers }) {
  return(
    <StyledMapView>
      {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.latlng}
            title={marker.title}
          />
        ))}
    </StyledMapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
});