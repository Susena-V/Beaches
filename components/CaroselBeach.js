import * as React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaroselBeach = () => {
  return (
    <View style={[styles.maskGroupParent, styles.maskGroupLayout]}>
      <Image
        style={[styles.maskGroupIcon, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group11.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.goaBeachWrapper}>
          <Text style={styles.goaBeach}>Goa Beach</Text>
        </View>
        <Text style={[styles.km, styles.kmTypo]}>7km</Text>
        <Text style={[styles.text, styles.kmTypo]}>4.5</Text>
        <Image
          style={styles.fiRrMarkerIcon}
          contentFit="cover"
          source={require("../assets/firrmarker.png")}
        />
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    height: 405,
    width: 270,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 75,
    width: 224,
    position: "absolute",
  },
  kmTypo: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    top: 43,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupIcon: {
    height: 405,
    width: 270,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowRadius: 9,
    elevation: 9,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_500,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  goaBeach: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  goaBeachWrapper: {
    top: 11,
    left: 16,
    width: 78,
    height: 19,
    position: "absolute",
  },
  km: {
    left: 42,
  },
  text: {
    left: 192,
  },
  fiRrMarkerIcon: {
    left: 14,
    width: 16,
    height: 16,
    overflow: "hidden",
    top: 43,
    position: "absolute",
  },
  rectangleParent: {
    top: 305,
    left: 23,
  },
  groupItem: {
    top: 14,
    left: 212,
    width: 44,
    height: 44,
    position: "absolute",
  },
  maskGroupParent: {
    top: 411,
    left: 320,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default CaroselBeach;
