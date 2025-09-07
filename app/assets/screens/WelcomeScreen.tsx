import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default function WelcomeScreen({navigation}) {

  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 5000, // 5 seconds for full cycle
        useNativeDriver: false, 
      })
    ).start();
  }, [colorAnim]);

  // Interpolate the border color like a lava lamp flow
  const borderColor = colorAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [
      'purple',
      'blue',
      'pink',
      'orange',
      'purple'
    ],
  });

  return (
      <Animated.View style={[styles.container, { borderColor }]}>
        <Text style={styles.heading1}>Cal X</Text>
        <View>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("CameraMode")}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 8,
      borderRadius: 55
    },
    heading1: {
      color: 'white',
      fontSize: 65,
      position: 'absolute',
      textAlign: 'center',
      top: 250,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      borderRadius: 40,
      height: 50,
      width: 100,
    },
  });
