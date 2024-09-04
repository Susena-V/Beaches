import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BeachDescp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beachDescp}>
      <Image
        style={styles.beachDescpChild}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <View style={[styles.beachDescpItem, styles.beachShadowBox]} />
      <Text style={[styles.mapToBeach, styles.cTypo]}>Map to Beach</Text>
      <Image
        style={[styles.sendIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/send-icon.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
      <View style={[styles.beachDescpInner, styles.beachShadowBox]} />
      <Text style={[styles.goaBeach, styles.goaBeachFlexBox]}>Goa Beach</Text>
      <Text style={[styles.overview, styles.goaBeachFlexBox]}>Overview</Text>
      <Text style={[styles.km, styles.kmTypo]}>7km</Text>
      <Text style={[styles.activites, styles.activitesTypo]}>Activites</Text>
      <Text style={[styles.leaveAReview, styles.activitesTypo]}>
        Leave a Review
      </Text>
      <Text style={styles.paraglidingPhotoshoot}>Paragliding, Photoshoot</Text>
      <Text style={[styles.inPublishingAnd, styles.goaBeachFlexBox]}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
      </Text>
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker5.png")}
      />
      <View style={[styles.rectangleView, styles.beachChildLayout]} />
      <View style={styles.cParent}>
        <Text style={[styles.c, styles.cClr]}>
          <Text style={styles.text}>16</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.text2}>{` `}</Text>
          <Text style={styles.text}>C</Text>
        </Text>
        <Text style={[styles.o, styles.cClr]}>o</Text>
      </View>
      <View style={[styles.beachDescpChild1, styles.beachChildLayout]} />
      <View style={[styles.beachDescpChild1, styles.beachChildLayout]} />
      <Text style={[styles.text3, styles.text3Typo]}>4.5</Text>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-91.png")}
      />
      <Image
        style={[styles.beachDescpChild3, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.archiveIcon}
        contentFit="cover"
        source={require("../assets/archive.png")}
      />
      <View style={[styles.beachDescpChild4, styles.beachChildLayout]} />
      <View style={[styles.beachDescpChild4, styles.beachChildLayout]} />
      <Text style={[styles.hours, styles.text3Typo]}>8 hours</Text>
      <Image
        style={[styles.iconClock, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon-clock.png")}
      />
      <Pressable
        style={[styles.iconArrowLeft, styles.iconLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon-arrow-left.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconCloud, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-cloud.png")}
      />
      <Text style={[styles.text4, styles.kmTypo]}>4.8</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  beachShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 13,
    },
    position: "absolute",
  },
  cTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  maskGroupIconLayout: {
    width: 374,
    left: 28,
  },
  goaBeachFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  kmTypo: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  activitesTypo: {
    color: Color.colorGray_400,
    top: 531,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  beachChildLayout: {
    height: 34,
    width: 34,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_7xs,
    top: 572,
    position: "absolute",
  },
  cClr: {
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  text3Typo: {
    top: 578,
    color: Color.colorGray_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    top: "62.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    height: 44,
    width: 44,
    top: 46,
    position: "absolute",
  },
  iconLayout: {
    height: "1.29%",
    position: "absolute",
  },
  beachDescpChild: {
    top: 150,
    left: 57,
    width: 301,
    height: 340,
    position: "absolute",
  },
  beachDescpItem: {
    top: 810,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 26,
    elevation: 26,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 373,
    height: 66,
    left: 28,
  },
  mapToBeach: {
    marginTop: 366,
    marginLeft: -84,
    top: "50%",
    left: "50%",
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  sendIcon: {
    height: "2.47%",
    width: "5.35%",
    top: "89.16%",
    right: "34.65%",
    bottom: "8.37%",
    left: "60%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 28,
    height: 460,
    position: "absolute",
  },
  beachDescpInner: {
    top: 355,
    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowRadius: 9,
    elevation: 9,
    borderRadius: Border.br_mini,
    backgroundColor: "rgba(29, 29, 29, 0.3)",
    width: 331,
    height: 104,
    left: 49,
  },
  goaBeach: {
    left: 62,
    fontSize: 24,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    top: 366,
    color: Color.colorWhite,
  },
  overview: {
    top: 525,
    fontSize: 22,
    color: "#1b1b1b",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    left: 28,
  },
  km: {
    left: 327,
    fontSize: FontSize.size_lg,
    top: 366,
  },
  activites: {
    left: 179,
  },
  leaveAReview: {
    left: 289,
  },
  paraglidingPhotoshoot: {
    top: 428,
    left: 59,
    width: 203,
    fontSize: FontSize.size_base,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  inPublishingAnd: {
    top: 655,
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    width: 374,
    left: 28,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  fiRrMarkerIcon: {
    top: 365,
    left: 303,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    left: 193,
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  text2: {
    fontSize: FontSize.size_3xs,
  },
  c: {
    top: 2,
    left: 0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  o: {
    top: 0,
    left: 24,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    color: Color.colorGray_200,
  },
  cParent: {
    top: 575,
    left: 233,
    width: 40,
    height: 25,
    position: "absolute",
  },
  beachDescpChild1: {
    left: 333,
  },
  text3: {
    left: 373,
  },
  vectorIcon: {
    height: "1.79%",
    width: "3.88%",
    right: "16.58%",
    bottom: "35.87%",
    left: "79.53%",
  },
  ellipseIcon: {
    left: 49,
  },
  beachDescpChild3: {
    left: 339,
  },
  archiveIcon: {
    top: 56,
    left: 349,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  beachDescpChild4: {
    left: 29,
  },
  hours: {
    left: 69,
  },
  iconClock: {
    height: "1.72%",
    width: "3.72%",
    right: "87.44%",
    bottom: "35.94%",
    left: "8.84%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconArrowLeft: {
    left: "15.58%",
    top: "6.65%",
    right: "83.16%",
    bottom: "92.06%",
    width: "1.26%",
  },
  iconCloud: {
    height: "1.59%",
    width: "4.19%",
    top: "62.45%",
    right: "49.07%",
    bottom: "35.97%",
    left: "46.74%",
    position: "absolute",
  },
  text4: {
    top: 429,
    left: 344,
    fontSize: FontSize.size_sm,
  },
  vectorIcon1: {
    width: "2.79%",
    top: "46.24%",
    right: "21.4%",
    bottom: "52.47%",
    left: "75.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  beachDescp: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default BeachDescp;
