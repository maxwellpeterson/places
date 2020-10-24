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

const FollowButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const BackButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.backButtonScreenContainer}>
              <BackButton title="back" size="sm" />
            </View>

            <Text style={styles.headerText}>username</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "flexDirection" }}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri:
                    "https://i.pinimg.com/474x/4c/3e/3b/4c3e3b91f05a5765aa544ac7557d6642.jpg",
                }}
              />
            </View>

            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text style={styles.profileName}>jueun kang</Text>
              <Text>
                <Text style={styles.textNumber}>37</Text> <Text>Places</Text>
              </Text>
              <Text>
                <Text style={styles.textNumber}>7</Text> <Text>Cities</Text>
              </Text>
            </View>

            <View style={{ flex: 1, height: 30, position: "relative" }}>
              <FollowButton title="follow" size="sm" />
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.profileBioText}>add a bio here</Text>
            <View style={styles.buttonScreenContainer}>
              <FollowButton title="follow" size="sm" />
            </View>
          </View>
        </View>
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
    alignSelf: "flex-end",
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
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 12,
    alignSelf: "center",
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
