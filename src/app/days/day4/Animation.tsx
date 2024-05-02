import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View style={{ backgroundColor: "black" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        style={{ width: '80%', maxWidth:400 }}
        source={require("assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
