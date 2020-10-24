import React from "react"
import { StyleSheet, View } from "react-native"
import ArticleBox from "./article-box"

export default function AllArticles({ articles }) {
  return (
    <View>
      {articles.map((article) => (
        <ArticleBox {...article} />
      ))}
    </View>
  )
}
