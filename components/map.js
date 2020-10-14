import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Map({ markers }) {
  return(
    <MapView style={styles.mapStyle}>
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

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
});