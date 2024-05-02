import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  GestureDetector,
  Directions,
  Gesture,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  BounceInLeft,
  BounceOutRight,
  BounceInRight,
  SlideInLeft,
  SlideOutRight,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const OnboardingSteps = [
  {
    title: "Track Every transaction",
    description:
      "Monitor your spending and contribution, ensuring every penny alligns with your fimily's aspirations",
    icon: "people-arrows",
  },
  {
    title: "Learn and grow together",
    description: "Challange for december to grow",
    icon: "snowflake",
  },
  {
    title: "Education for children",
    description: "Contribute to the children to help the organization",
    icon: "book-reader",
  },
];

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnboardingSteps[screenIndex];
  const onContinue = () => {
    if (screenIndex === OnboardingSteps.length - 1) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };
  const onBack = () => {
    const firstScreen = screenIndex == 0;
    if (firstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipeNext = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  const swipePrev = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(swipeNext, swipePrev);

  return (
    <SafeAreaView
      style={[
        styles.page,
        { paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.stepIndicatorContainer}>
        {OnboardingSteps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: screenIndex == index ? "#cef202" : "grey" },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <Animated.View
          style={styles.pageContent}
          entering={FadeIn}
          key={screenIndex}
        >
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#cef202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft.delay(150)}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft.delay(150)}
              style={styles.subtitle}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText}>Skip</Text>
              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#15141a",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  image: { alignSelf: "center", margin: 20, marginTop: 30 },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "regularItalic",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  subtitle: {
    color: "grey",
    fontSize: 25,
    lineHeight: 25,
  },
  footer: {
    marginTop: "auto",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "#302e34",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fdfdfd",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 15,
  },
  buttonsRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  stepIndicatorContainer: {
    width: "100%",
    height: 5,
    flexDirection: "row",
    gap: 5,
  },
  dot: { flex: 1, backgroundColor: "grey", borderRadius: 10 },
});
