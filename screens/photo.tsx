import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function Photo({ route, navigation }) {
  const { photoUri } = route.params; // Retrieves the photo URI passed from the Camera screen

  const analyzePhoto = async () => {
    try {
      console.log("Analyze button pressed. Functionality to be implemented.");
    } catch (error) {
      console.error("Error analyzing photo:", error);
      Alert.alert("Error", "An error occurred while analyzing the photo.");
    }
  };

  const retakePhoto = () => {
    navigation.navigate("camera"); // Navigate back to the Camera screen
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.image} />
      <TouchableOpacity style={styles.buttonContainer} onPress={analyzePhoto}>
        <View style={styles.analyzeButton}>
          <Text style={styles.buttonText}>Analyze</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={retakePhoto}>
        <View style={styles.retakeButton}>
          <Text style={styles.buttonText}>Retake</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    padding: 20,
  },
  analyzeButton: {
    backgroundColor: "purple",
    position: "absolute",
    left: 80,
    top: -40,
    borderRadius: 20,
    height: 55,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  retakeButton: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
