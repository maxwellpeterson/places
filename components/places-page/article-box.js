import React from "react"
import styled from "styled-components/native"

const ArticleContainer = styled.View`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c2d6d6;
  border-radius: 30px;
  padding-vertical: 3px;
  margin: 3px;
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
  align-items: flex-end;
`
const ArticleBodyContainer = styled.View`
  flex-direction: column;
  align-content: space-between;
  padding-vertical: 5px;
`
const ArticleTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`
const ArticleCategory = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #486a6a;
`
const ArticleUser = styled.Text`
  font-size: 12px;
`
const ArticleDate = styled.Text`
  font-size: 12px;
`
const ArticleBody = styled.Text`
  font-size: 12px;
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
