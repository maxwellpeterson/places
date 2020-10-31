import React from "react"
import { Text, View, ScrollView } from "react-native"
import styled from "styled-components/native"
import BackButton from "../components/places-page/back-button"
import NewButton from "../components/places-page/new-post-button"
import AllArticles from "../components/places-page/all-articles"
import { articles } from "../test-data/articles"

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #486a6a;
`
const PageHeader = styled.View`
  display: flex;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const SectionContainer = styled.View`
  align-content: center;
  background-color: #f0f5f5;
`
export default function PlacePage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SectionContainer>
        <PageHeader>
          <BackButton />
          <Title> Place </Title>
          <NewButton />
        </PageHeader>
        <AllArticles articles={articles} />
      </SectionContainer>
    </ScrollView>
  )
}
