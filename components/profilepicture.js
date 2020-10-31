import React from "react"
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
      <ProfPic source="https://i.pinimg.com/474x/4c/3e/3b/4c3e3b91f05a5765aa544ac7557d6642.jpg"></ProfPic>
    </ImageContainer>
  )
}
