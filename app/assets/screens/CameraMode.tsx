import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';



export default function CameraMode({navigation}) {
    const cameraRef = useRef(null);

    const capturePhoto = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, exif: false };
            const takenPhoto = await cameraRef.current.takePictureAsync(options);
            navigation.navigate("ScreenShotPreview", { photoUri: takenPhoto.uri });
        }
    };

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={'back'} ref={cameraRef} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={capturePhoto}>
                    <Text style={{fontWeight: 'bold'}}>Capture</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    button: {
        borderRadius:20,
        backgroundColor: 'white',
        padding: 10,
    }
});