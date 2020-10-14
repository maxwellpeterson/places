import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../styles/screen-container';
import Map from '../components/map';

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

export default function Home() {
  return(
    <ScreenContainer>
      <Text>This is some text from the home screen.</Text>
    </ScreenContainer>
  );
}