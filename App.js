import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native"
import BackButton from "./components/backbutton"
import UsernameText from "./components/username"
import ProfilePage from "./screens/profile"
import styled from "styled-components/native"
import ProfilePicture from "./components/profilepicture"

const FollowButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row>
          <BackButton></BackButton>
          <UsernameText></UsernameText>
        </Row>
        <ProfilePicture></ProfilePicture>
        <FollowButton></FollowButton>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  buttonScreenContainer: {
    flex: 1,
    padding: 14,
  },
  backButtonScreenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 14,
  },
  buttonContainer: {
    flex: 1,
    elevation: 8,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 14,
    width: 75,
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  followButtonContainer: {
    flex: 1,
    height: 30,
    position: "relative",
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingRight: 160,
    alignSelf: "center",
    alignContent: "center",
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 19,
    paddingVertical: 8,
  },
  profileBioText: {
    fontSize: 12,
    padding: 10,
  },
  imageContainer: {
    padding: 10,
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  textNumber: {
    fontWeight: "bold",
    fontSize: 18,
  },
})
