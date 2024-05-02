import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Markdown" }} />
      <Link href={"days/day3/Editor"} asChild>
        <Button title="Goto Editor" />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
