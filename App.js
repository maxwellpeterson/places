import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Alert, Button, TouchableOpacity} from 'react-native';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity
  onPress={onPress}
  style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

const BackButton = ({onPress, title}) => (
  <TouchableOpacity
  onPress={onPress}
  style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        
          <View style={{flexDirection: 'row'}}>
            <View style={styles.backButtonScreenContainer}>
              <BackButton title="back" size="sm"/>
            </View>
            <Text style={styles.headerText}>username</Text>
          </View>

          <Text style={styles.profileName}>first name last name</Text>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.backButtonScreenContainer}>
              <BackButton title="follow" size="sm"/>
            </View><View style={styles.backButtonScreenContainer}>
              <BackButton title="follow" size="sm"/>
            </View>
          </View>

          <Text style={styles.profileBioText}>add a bio here</Text>

          <View style={styles.buttonScreenContainer}>
            <AppButton title="follow" size="sm"/>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonScreenContainer: {
    flex: 1,
    justifyContent: "start",
    padding: 14
  },
  backButtonScreenContainer: {
    flex: 1,
    justifyContent: "start",
    padding: 14
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 14
  },
  buttonText : {
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 12
  },
  profileName: {
    fontWeight: "bold"
  },
  profileBioText: {
    fontSize: 12
  }
});
