import { Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Link } from "expo-router";

type IDaylistItem = {
  day: number;
};

SplashScreen.preventAutoHideAsync();

const DaylistItem = ({ day }: IDaylistItem) => {

  return (
    <Link href={`days/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}> {day}</Text>
      </Pressable>
    </Link>
  );
};

export default DaylistItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderBlockColor: "#9b4521",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: "whisper",
  },
});
