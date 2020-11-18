import React from "react"
import { View } from "react-native"
import ProfileInfo from "./profileinfo"

export default function AllProfileData({ profileData }) {
  return (
    <View>
      {profileData.map((info) => (
        <ProfileInfo {...info} />
      ))}
    </View>
  )
}
