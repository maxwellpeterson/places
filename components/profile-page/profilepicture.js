import React from "react"
import profileIcon from "../../test-data/profile/profile-icon.jpg"
import styled from "styled-components/native"

const ProfPic = styled.Image`
  width: 95px;
  height: 95px;
  background: #b3cee5;
  border-radius: 47.5px;
`
const ImageContainer = styled.View`
  padding: 5px 0px 0px 10px;
`

export default function ProfilePicture() {
  return (
    <ImageContainer>
      <ProfPic source={profileIcon} />
    </ImageContainer>
  )
}
