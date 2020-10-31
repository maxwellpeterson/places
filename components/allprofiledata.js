import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

export default function AllProfileData({ profileData }) {
  return (
    <View>
      {profileData.map((info) => (
        <ProfileInfo {...info} />
      ))}
    </View>
  )
}
