import React from "react"
import styled from "styled-components/native"
import { Text } from "react-native"

const ArticleContainer = styled.View`
  flex: 1;
  padding: 20px;
  height: 600px;

  justify-content: center;
`
const ArticleInfoContainer = styled.View`
  display: flex;
  height: 30px;
  flex-direction: column;
  align-content: space-between;
`

export default function ArticleBox({ user, date, category, body }) {
  return (
    <ArticleContainer>
      <ArticleInfoContainer>
        <Text>{user}</Text>
        <Text>{category}</Text>
        <Text>{date}</Text>
      </ArticleInfoContainer>
      <Text>{body}</Text>
    </ArticleContainer>
  )
}
