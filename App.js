import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'; 
import { StyleSheet, View, Dimensions } from 'react-native';

const markers = [
  {
    latlng: {
      latitude: 37.849269,
      longitude: -122.486808,
    },
    title: "Sausalito",
  },
  {
    latlng: {
      latitude: 37.761822,
      longitude: -122.448151,
    },
    title: "Cole Valley",
  },
  {
    latlng: {
      latitude: 38.374196,
      longitude: -122.599046,
    },
    title: "Bennet Valley",
  },
  {
    latlng: {
      latitude: 37.7822232,
      longitude: -122.3928787,
    },
    title: "South Park",
  },
  {
    latlng: {
      latitude: 37.744830,
      longitude: -122.436610,
    },
    title: "Noe Valley",
  },
  {
    latlng: {
      latitude: 37.908065,
      longitude: -122.666629,
    },
    title: "Stinson",
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.latlng}
            title={marker.title}
          />
        ))}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
