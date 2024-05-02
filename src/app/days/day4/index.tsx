import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 4: Animation" }} />
      <Link asChild href={"/days/day4/Animation"}>
        <Button title="Goto Splash" />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
