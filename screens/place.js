import React from "react"
import { Text, View } from "react-native"
import styled from "styled-components/native"
import BackButton from "../components/places-page/back-button"
import NewButton from "../components/places-page/new-post-button"
import AllArticles from "../components/places-page/all-articles"
import { articles } from "../test-data/articles"

const Title = styled.Text`
  font-size: 20px;
`
const PageHeader = styled.View`
  display: flex;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
`
const SectionContainer = styled.View`
  flex: 1;
  align-content: center;
  height: 800px;
`
export default function PlacePage() {
  return (
    <SectionContainer>
      <PageHeader>
        <BackButton />
        <Title> Place </Title>
        <NewButton />
      </PageHeader>
      <AllArticles articles={articles} />
    </SectionContainer>
  )
}
