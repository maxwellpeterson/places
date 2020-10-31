import React from "react"
import styled from "styled-components/native"
import BackButton from "../components/backbutton"
import ProfilePicture from "../components/profilepicture"
import UsernameText from "../components/username"

const PageContainer = styled.View`
flex: 1,
backgroundColor: "#fff",
`

export default function ProfilePage() {
  return (
    <PageContainer>
      <BackButton>
        <UsernameText></UsernameText>
      </BackButton>
    </PageContainer>
  )
}
