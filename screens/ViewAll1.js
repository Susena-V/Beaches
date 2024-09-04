import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ViewAll1 = () => {
  return (
    <View style={styles.viewAll2}>
      <Image
        style={[styles.iconHome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-home.png")}
      />
      <View style={[styles.viewAll2Child, styles.viewBorder]} />
      <Text style={[styles.searchActivitiesBeaches, styles.sortAZTypo]}>
        Search activities, beaches etc.
      </Text>
      <View style={[styles.viewAll2Item, styles.viewBorder]} />
      <Image
        style={styles.viewAll2Inner}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={styles.micIcon}
        contentFit="cover"
        source={require("../assets/mic.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-storm.png")}
      />
      <Text style={styles.text}>30</Text>
      <Image
        style={[styles.chatbot1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chatbot-1.png")}
      />
      <View style={[styles.rectangleView, styles.viewChildShadowBox]} />
      <View style={[styles.viewAll2Child1, styles.viewChildShadowBox]} />
      <View style={[styles.viewAll2Child2, styles.viewChildShadowBox]} />
      <View style={[styles.viewAll2Child3, styles.viewChildShadowBox]} />
      <Text style={[styles.sortAZ, styles.sortAZTypo]}>Sort A-Z</Text>
      <Image
        style={[styles.iconSetting, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-setting.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group6.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group7.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group8.png")}
      />
      <Image
        style={[styles.maskGroupIcon3, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group9.png")}
      />
      <Text style={styles.warkalaGoa}>Warkala, Goa</Text>
      <Text style={[styles.paraglidingPhotoshoot, styles.kmTypo]}>
        Paragliding, Photoshoot
      </Text>
      <Text style={[styles.km, styles.kmTypo]}>5km</Text>
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker6.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon1}
        contentFit="cover"
        source={require("../assets/firrmarker1.png")}
      />
      <Image
        style={[styles.image175Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-174.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewBorder: {
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    position: "absolute",
  },
  sortAZTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    position: "absolute",
  },
  viewChildShadowBox: {
    height: 147,
    width: 376,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  maskGroupPosition: {
    left: 275,
    height: 112,
    width: 114,
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconHome: {
    height: "2.47%",
    width: "5.35%",
    top: "93.45%",
    right: "79.77%",
    bottom: "4.08%",
    left: "14.88%",
  },
  viewAll2Child: {
    marginLeft: -190,
    top: 22,
    left: "50%",
    borderRadius: Border.br_xl,
    borderWidth: 2,
    width: 316,
    height: 46,
  },
  searchActivitiesBeaches: {
    top: 35,
    left: 42,
    color: Color.colorGray_100,
  },
  viewAll2Item: {
    marginTop: -438,
    top: "50%",
    left: 274,
    borderRightWidth: 2,
    width: 2,
    height: 34,
  },
  viewAll2Inner: {
    top: 903,
    left: 71,
    width: 8,
    height: 8,
    position: "absolute",
  },
  micIcon: {
    top: 33,
    left: 294,
    width: 24,
    height: 24,
    position: "absolute",
  },
  dayStormIcon: {
    top: 13,
    left: 362,
    width: 56,
    height: 50,
    position: "absolute",
  },
  text: {
    top: 48,
    left: 354,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  chatbot1Icon: {
    top: 856,
    left: 331,
    width: 50,
  },
  rectangleView: {
    top: 139,
    backgroundColor: "rgba(15, 13, 13, 0.2)",
    left: 26,
    height: 147,
    width: 376,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  viewAll2Child1: {
    top: 322,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    left: 26,
    height: 147,
    width: 376,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  viewAll2Child2: {
    top: 505,
    backgroundColor: "rgba(15, 15, 15, 0.2)",
    left: 26,
    height: 147,
    width: 376,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  viewAll2Child3: {
    top: 688,
    left: 27,
    backgroundColor: "rgba(4, 3, 3, 0.2)",
  },
  sortAZ: {
    top: 91,
    left: 330,
    color: Color.colorSilver_200,
  },
  iconSetting: {
    height: "2.34%",
    width: "5.58%",
    top: "9.76%",
    right: "85.12%",
    bottom: "87.9%",
    left: "9.3%",
  },
  maskGroupIcon: {
    left: 273,
    height: 112,
    width: 114,
    top: 157,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 343,
  },
  maskGroupIcon2: {
    top: 526,
  },
  maskGroupIcon3: {
    top: 706,
  },
  warkalaGoa: {
    fontSize: FontSize.size_xl,
    color: "#0d0101",
    width: 186,
    height: 19,
    left: 43,
    top: 157,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  paraglidingPhotoshoot: {
    top: 250,
    color: "#1b0c0c",
    width: 203,
    left: 43,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
  },
  km: {
    top: 181,
    left: 54,
    fontSize: FontSize.size_3xs,
    color: "#1f0808",
  },
  fiRrMarkerIcon: {
    top: 180,
    left: 44,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  fiRrMarkerIcon1: {
    top: 868,
    left: 241,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  image175Icon: {
    top: 860,
    left: 142,
    width: 44,
  },
  viewAll2: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ViewAll1;
