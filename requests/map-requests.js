import { markers } from "../test-data/home/map-markers.json"

// The "Region" type is a little counterintuitive:
// https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md#types
// https://stackoverflow.com/questions/36685372/how-to-zoom-in-out-in-react-native-map/36688156#36688156

// May want to "overflow" tolerance so you don't have to release the map to be able to see previously
// off-screen markers that are close to visible region

export const getMarkersWithinRegion = (region) => {
  const latTolerance = region.latitudeDelta / 2
  const longTolerance = region.longitudeDelta / 2

  const isMarkerWithinRegion = (marker) => {
    const markerLat = marker.latlng.latitude
    const markerLong = marker.latlng.longitude

    return (
      Math.abs(region.latitude - markerLat) < latTolerance &&
      Math.abs(region.longitude - markerLong) < longTolerance
    )
  }

  const targetMarkers = markers.filter(isMarkerWithinRegion)

  console.log(`${targetMarkers.length} markers in visible region`)

  return targetMarkers
}
