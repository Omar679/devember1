import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DaylistItem from "@components/DaylistItem";

const days = [...Array(24)].map((_, index) => index + 1);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.colum}
        contentContainerStyle={styles.content}
        data={days}
        renderItem={({ item }) => <DaylistItem day={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    gap: 10,
    padding: 10,
  },
  colum: { gap: 10 },
});
