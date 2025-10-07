import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useCameraPermissions, CameraView, CameraType } from 'expo-camera';


export default function Camera({ navigation }) {
    const cameraRef = useRef(null);                                            // creates a reference to the camera component
    
    //if camera permissions is granted, we'll implement the camera permission after


    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.8, skipProcessing: false, exif: false, imageType: 'jpg' }; // settings for the photo
            const photo = await cameraRef.current.takePictureAsync(options);   // references the camera component to take a picture and stores it in photo variable
            console.log('Photo taken:', photo.uri);                            // check the photo URI in the console
            navigation.navigate('photo', { photoUri: photo.uri }); // navigate to the preview screen with the photo URI
        }
    }
    return (
        <View style={styles.container}>
            <CameraView 
            ref={cameraRef}                                                    // refers to the camera component
            style={styles.camera}                                              // styles the camera to fill the screen
            facing = "back"                                                    // uses the back camera
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={takePicture}>
                <View style={styles.button}></View>
            </TouchableOpacity>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        margin: 20,
        fontSize: 16,
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60,
        padding: 20,
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'white',
        height: 55,
        width: 55,
        alignSelf: 'center',
    }
});