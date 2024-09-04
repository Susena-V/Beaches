import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ propTop, maskGroup, propColor }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const paraglidingPhotoshootStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View
      style={[styles.maskGroupParent, styles.maskGroupLayout, groupViewStyle]}
    >
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
        contentFit="cover"
        source={maskGroup}
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
          styles.paraglidingPhotoshoot,
          styles.warkalaGoaPosition,
          paraglidingPhotoshootStyle,
        ]}
      >
        Paragliding, Photoshoot
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
    left: 24,
  },
  paraglidingPhotoshoot: {
    top: 117,
    fontSize: FontSize.size_base,
    color: Color.colorMaroon_100,
    width: 203,
    left: 24,
    fontFamily: FontFamily.robotoRegular,
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
    top: 496,
    left: 26,
  },
});

export default GroupComponent;
