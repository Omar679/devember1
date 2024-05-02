import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import Display from "./Display";

const copy = `
# h1 Heading 8-)
## h2 Heading 8-)
### h3 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;

const Editor = () => {
  const [text, setText] = useState(copy);
  const [viewer, setViewer] = useState("view");
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Markdown" }} />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setViewer("edit")}
          style={[
            styles.botton,
            { borderColor: viewer == "edit" ? "red" : "#606060" },
          ]}
        >
          <Text>Edit</Text>
        </Pressable>
        <Pressable
          style={[
            styles.botton,
            { borderColor: viewer == "view" ? "red" : "#606060" },
          ]}
          onPress={() => setViewer("view")}
        >
          <Text>View</Text>
        </Pressable>
      </View>
      {viewer == "view" ? (
        <Display children={text} />
      ) : (
        <TextInput
          placeholder="Write something here"
          value={text}
          multiline
          style={styles.input}
          onChangeText={setText}
        />
      )}
    </View>
  );
};

export default Editor;

const styles = StyleSheet.create({
  botton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#606060",
    padding: 10,
    marginTop: 30,
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  input: { marginTop: 10 },
});
