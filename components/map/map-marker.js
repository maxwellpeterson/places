import React from "react"
import { Text, Dimensions } from "react-native"
import { Marker, Callout } from "react-native-maps"
import styled from "styled-components"

const CalloutContainer = styled.View`
  max-width: ${Dimensions.get("window").width / 2}px;
`

const CalloutTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

// Note that complex border styling only works for View components (not Text): https://stackoverflow.com/a/51962817
const TitleWrapper = styled.View`
  padding-bottom: 3px;
`

export default function MapMarker({ latlng, title, description }) {
  return (
    <Marker coordinate={latlng}>
      <Callout onPress={() => alert(`You selected ${title}!`)}>
        <CalloutContainer>
          <TitleWrapper>
            <CalloutTitle>{title}</CalloutTitle>
          </TitleWrapper>
          <Text>{description}</Text>
        </CalloutContainer>
      </Callout>
    </Marker>
  )
}
