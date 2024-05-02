import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-renderer";

const Display = ({ children }: PropsWithChildren) => {
  return <Markdown>{children}</Markdown>;
};

export default Display;

const styles = StyleSheet.create({});
