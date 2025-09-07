import React from "react";
import { View,Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CameraPreview({ route, navigation }) {
  const { photoUri } = route.params;

  const retakePhoto = () => {
    navigation.navigate("CameraMode");
    
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retakeButton} onPress={retakePhoto}>
            <Text style={{fontWeight: 'bold'}}>Retake</Text>
        </TouchableOpacity>
      </View>
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
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
  retakeButton: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },

});
