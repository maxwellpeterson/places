import React from "react"
import styled from "styled-components/native"
import { Text } from "react-native"

const ArticleContainer = styled.View`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f5f5;
`
const ArticleInfoContainer = styled.View`
  flex-direction: column;
  align-content: space-between;
  border-radius: 8px;
  background-color: #e0ebeb;
  padding: 5px;
`
const ArticleTitleAndCategory = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const ArticleBodyContainer = styled.View`
  flex-direction: column;
  align-content: space-between;
  padding-vertical: 10px;
`
const ArticleTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`
const ArticleCategory = styled.Text`
  font-size: 10px;
`
const ArticleUser = styled.Text`
  font-size: 10px;
`
const ArticleDate = styled.Text`
  font-size: 10px;
`
const ArticleBody = styled.Text`
  font-size: 10px;
`

export default function ArticleBox({ user, title, date, category, body }) {
  return (
    <ArticleContainer>
      <ArticleInfoContainer>
        <ArticleTitleAndCategory>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleCategory>{category}</ArticleCategory>
        </ArticleTitleAndCategory>
        <ArticleUser>{user}</ArticleUser>
        <ArticleDate>{date}</ArticleDate>
      </ArticleInfoContainer>
      <ArticleBodyContainer>
        <ArticleBody> {body} </ArticleBody>
      </ArticleBodyContainer>
    </ArticleContainer>
  )
}
