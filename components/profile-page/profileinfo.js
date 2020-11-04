import React from "react"
import { Dimensions } from "react-native"
import styled from "styled-components/native"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 19px;
`

const PlaceCityNumber = styled.Text`
font-weight: bold,
font-size: 18px;
padding: 0px 5px 0px 0px;
`

const PlaceCityText = styled.Text`
  font-size: 15px;
  padding: 2.5px 0px 0px 0px;
`

const BioContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const BioText = styled.Text`
  font-size: 13px;
  padding: 5px 8px 0px 0px;
`

const ColumnLayout = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`
const Row = styled.View`
  display: flex;
  flex-direction: row;
`

const ArticleContainer = styled.View`
  flex: 1;
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`

export default function ProfileInfo({
  firstName,
  lastName,
  places,
  cities,
  bio,
}) {
  return (
    <ColumnLayout>
      <ProfileName>
        {firstName} {lastName}
      </ProfileName>
      <Row>
        <PlaceCityNumber>{places}</PlaceCityNumber>
        <PlaceCityText>Places</PlaceCityText>
      </Row>
      <Row>
        <PlaceCityNumber>{cities}</PlaceCityNumber>
        <PlaceCityText>Cities</PlaceCityText>
      </Row>
      <BioText>{bio}</BioText>
    </ColumnLayout>
  )
}
