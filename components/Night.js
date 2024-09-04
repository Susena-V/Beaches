import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Night = () => {
  return (
    <View style={styles.night}>
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-moon.png")}
      />
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-clouds.png")}
      />
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-wind.png")}
      />
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-rain.png")}
      />
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-snow.png")}
      />
      <Image
        style={styles.nightMoonIcon}
        contentFit="cover"
        source={require("../assets/night-storm.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nightMoonIcon: {
    width: 200,
    height: 200,
  },
  night: {
    width: 1298,
    height: 256,
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default Night;
