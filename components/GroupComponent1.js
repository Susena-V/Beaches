import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={[styles.maskGroupParent, styles.maskGroupLayout]}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={styles.groupChild} />
      <Text style={[styles.text, styles.kmTypo]}>4.8</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/star-2.png")}
      />
      <Text style={[styles.warkalaGoa, styles.warkalaGoaPosition]}>
        Warkala, Goa
      </Text>
      <Text
        style={[
          styles.scubaDivingPhotoshootContainer,
          styles.warkalaGoaPosition,
        ]}
      >
        <Text style={styles.scubaDiving}>Scuba Diving</Text>
        <Text style={styles.text1}>{`, `}</Text>
        <Text style={styles.photoshoot}>Photoshoot</Text>
      </Text>
      <Text style={[styles.km, styles.kmTypo]}>5km</Text>
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    height: 154,
    width: 375,
    position: "absolute",
  },
  kmTypo: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  warkalaGoaPosition: {
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
  },
  groupChild: {
    top: 10,
    left: 11,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 353,
    height: 132,
    position: "absolute",
  },
  text: {
    top: 19,
    left: 336,
  },
  groupItem: {
    top: 20,
    left: 327,
    width: 8,
    height: 8,
    position: "absolute",
  },
  warkalaGoa: {
    top: 24,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 186,
    height: 19,
    color: Color.colorBlack,
  },
  scubaDiving: {
    color: Color.colorDarkolivegreen_100,
  },
  text1: {
    color: Color.colorBlack,
  },
  photoshoot: {
    color: Color.colorDarkolivegreen_200,
  },
  scubaDivingPhotoshootContainer: {
    top: 117,
    fontSize: FontSize.size_base,
    width: 203,
    fontFamily: FontFamily.robotoRegular,
    left: 24,
  },
  km: {
    top: 48,
    left: 35,
  },
  fiRrMarkerIcon: {
    top: 47,
    left: 25,
    width: 10,
    height: 10,
    overflow: "hidden",
    position: "absolute",
  },
  maskGroupParent: {
    top: 316,
    left: 26,
  },
});

export default GroupComponent1;
