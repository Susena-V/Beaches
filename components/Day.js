import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Day = () => {
  return (
    <View style={styles.day}>
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-storm1.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-snow.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-rain.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-wind.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-clouds.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-sun.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayStormIcon: {
    width: 200,
    height: 200,
  },
  day: {
    overflow: "hidden",
    flexDirection: "row",
    gap: 53,
  },
});

export default Day;
