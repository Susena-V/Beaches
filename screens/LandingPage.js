import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <LinearGradient
      style={[styles.landingPage, styles.frameFlexBox]}
      locations={[0, 0.43, 0.81, 1]}
      colors={["#091ab6", "#020f61", "#010f41", "#000e2c"]}
    >
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.beach}>Beach</Text>
        <Image
          style={styles.globeIcon}
          contentFit="cover"
          source={require("../assets/globe-icon.png")}
        />
      </View>
      <Text style={styles.findYourFun}>Find Your Fun!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  beach: {
    fontSize: 44,
    fontFamily: FontFamily.lobsterRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  globeIcon: {
    width: 36,
    height: 36,
  },
  frame: {
    width: 157,
    height: 55,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
  findYourFun: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#e8e8e8",
    textAlign: "center",
    width: 252,
  },
  landingPage: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    paddingHorizontal: 89,
    paddingVertical: 379,
    gap: 40,
    backgroundColor: "transparent",
  },
});

export default LandingPage;
