import React from "react"
import styled from "styled-components/native"

const BioStyle = styled.Text`
  font-size: 13px;
`
const BioContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-top: 10px;
`

export default function BioText({ profileBio }) {
  return (
    <BioContainer>
      <BioStyle> {profileBio} </BioStyle>
    </BioContainer>
  )
}
