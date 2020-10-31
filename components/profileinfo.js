import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 19px;
  padding: 0px 8px 0px 8px;
`

const PlaceCityNumber = styled.Text`
font-weight: bold,
font-size: 18px,
`

const BioText = styled.Text`
font-size: 12px,
padding: 10px,
`

export default function ProfileInfo({
  firstName,
  lastName,
  places,
  cities,
  bio,
}) {
  return (
    <View>
      <ProfileName>
        {firstName} {lastName}
      </ProfileName>
      <PlaceCityNumber>{places}</PlaceCityNumber> <Text>Places</Text>
      <PlaceCityNumber>{cities}</PlaceCityNumber> <Text>Places</Text>
    </View>
  )
}
