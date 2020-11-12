import React, { useState } from "react"
import { Text, View, ScrollView, TextInput } from "react-native"
import styled from "styled-components/native"
import PublishButton from "../components/places-page/publish-button"
import CancelButton from "../components/places-page/cancel-button"
//import CategoriesMenu from "../components/place-page/categories"

const NewPostPart = styled.View`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c2d6d6;
  border-radius: 30px;
  padding-vertical: 3px;
  margin: 3px;
`
const NewPostBody = styled.View`
  padding: 20px;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c2d6d6;
  border-radius: 30px;
  padding-vertical: 3px;
  margin: 3px;
`
const NewPostContainer = styled.View`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e6f7ff;
  border-radius: 30px;
  padding-vertical: 3px;
`
const ButtonContainer = styled.View`
  background-color: "#D3D3D3",
  border-radius: 8px,
  padding-vertical: 7px,
  padding-horizontal: 14px,
  width: 75px,
  margin: 30px;
  border-radius: 5px;
  background-color: #fafafa;
`
const PartBody = styled.Text`
  font-size: 10px;
  width: 100px;
  flex-wrap: wrap;
  flex: 1;
`

const NewPostWholePage = styled.View`
  align-content: center;
`

const PostButtons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 10px;
`

class NewPostClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      category: "",
      body: "",
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({ [nam]: val })
  }
}

export default function NewPost() {
  const [text1, text2, text3, setText] = useState("")
  return (
    <NewPostWholePage>
      <NewPostContainer>
        <NewPostPart>
          <TextInput
            placeholder="Title..."
            type="text"
            name="title"
            onChangeText={this.myChangeHandler}
          />
        </NewPostPart>
        <NewPostPart>
          <TextInput
            placeholder="Category..."
            type="text"
            name="category"
            onChangeText={this.myChangeHandler}
          />
        </NewPostPart>
        <NewPostBody>
          <ScrollView>
            <TextInput
              placeholder="Write your story here..."
              type="text"
              name="body"
              multiline={true}
              onChangeText={this.myChangeHandler}
            />
          </ScrollView>
        </NewPostBody>
      </NewPostContainer>

      <PostButtons>
        <CancelButton />
        <PublishButton />
      </PostButtons>
    </NewPostWholePage>
  )
}
