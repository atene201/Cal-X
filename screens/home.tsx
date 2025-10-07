import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import sign_in from './sign_in';
import camera from './camera';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.homeTitle}>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    homeTitle: {
        color: 'black',
        fontSize: 40,
        position: 'absolute',
        top: 100,
        left: 50,

    }
});