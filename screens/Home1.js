import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home1 = () => {
  return (
    <View style={styles.location}>
      <Image
        style={[styles.iconHome, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon-home.png")}
      />
      <Text style={[styles.mostVisited, styles.warkalaGoaTypo]}>
        Most Visited
      </Text>
      <Image
        style={[styles.locationChild, styles.locationChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.nearby, styles.nearbyTypo]}>Nearby</Text>
      <Text style={[styles.closestBeaches, styles.hiUserClr]}>
        Closest Beaches
      </Text>
      <Text style={[styles.hiUser, styles.text3Typo]}>
        <Text style={styles.hiTypo}>Hi,</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.hiTypo}>{`User `}</Text>
      </Text>
      <Text style={[styles.exploreTheCoast, styles.exploreTheCoastTypo]}>
        Explore the Coast
      </Text>
      <Image
        style={styles.arrowRightCircleIcon}
        contentFit="cover"
        source={require("../assets/arrow-rightcircle.png")}
      />
      <View style={styles.locationItem} />
      <Text style={[styles.warkalaGoa, styles.warkalaGoaTypo]}>
        Warkala, Goa
      </Text>
      <Text style={[styles.km, styles.kmTypo]}>5km</Text>
      <Text style={[styles.text1, styles.kmTypo]}>4.8</Text>
      <Text style={[styles.text1, styles.kmTypo]}>4.8</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker.png")}
      />
      <Image
        style={styles.locationInner}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.rectangleView, styles.viewBorder]} />
      <Text
        style={[styles.searchActivitiesBeaches, styles.exploreTheCoastTypo]}
      >
        Search activities, beaches etc.
      </Text>
      <View style={[styles.lineView, styles.viewBorder]} />
      <Image
        style={styles.locationChild1}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.iconSetting, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon-setting.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.locationChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-111.png")}
      />
      <Text style={[styles.viewAll, styles.viewAllPosition]}>View All</Text>
      <Image
        style={[styles.micIcon, styles.viewAllPosition]}
        contentFit="cover"
        source={require("../assets/mic.png")}
      />
      <Image
        style={styles.dayStormIcon}
        contentFit="cover"
        source={require("../assets/day-storm.png")}
      />
      <Text style={[styles.text3, styles.hiTypo]}>30</Text>
      <Image
        style={[styles.chatbot1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/chatbot-1.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon1}
        contentFit="cover"
        source={require("../assets/firrmarker1.png")}
      />
      <Image
        style={[styles.image174Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-174.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  warkalaGoaTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
  },
  locationChildPosition: {
    height: 54,
    top: 312,
    position: "absolute",
  },
  nearbyTypo: {
    color: Color.colorSilver_200,
    top: 330,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  hiUserClr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: 26,
  },
  text3Typo: {
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  exploreTheCoastTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  kmTypo: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    top: 759,
    textAlign: "left",
    position: "absolute",
  },
  viewBorder: {
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    position: "absolute",
  },
  viewAllPosition: {
    left: 352,
    position: "absolute",
  },
  hiTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  iconPosition: {
    height: 45,
    top: 859,
    position: "absolute",
  },
  iconHome: {
    height: "2.47%",
    width: "5.35%",
    top: "93.45%",
    right: "80.23%",
    bottom: "4.08%",
    left: "14.42%",
  },
  mostVisited: {
    marginTop: -136,
    left: 51,
    color: "rgba(52, 43, 43, 0.5)",
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
    position: "absolute",
    top: "50%",
  },
  locationChild: {
    left: 190,
    width: 105,
  },
  nearby: {
    left: 216,
    textAlign: "center",
    position: "absolute",
  },
  closestBeaches: {
    top: 242,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  hiUser: {
    top: 34,
    textAlign: "left",
    color: Color.colorDarkslategray,
    left: 26,
  },
  exploreTheCoast: {
    top: 80,
    letterSpacing: 0.1,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xl,
    left: 26,
    color: Color.colorGray_100,
  },
  arrowRightCircleIcon: {
    top: 28,
    left: 152,
    width: 49,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  locationItem: {
    top: 716,
    left: 48,
    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_500,
    width: 224,
    height: 75,
    position: "absolute",
  },
  warkalaGoa: {
    top: 727,
    left: 64,
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  km: {
    left: 81,
  },
  text1: {
    left: 240,
  },
  vectorIcon: {
    height: "1.29%",
    width: "2.79%",
    top: "81.65%",
    right: "45.58%",
    bottom: "17.06%",
    left: "51.63%",
  },
  fiRrMarkerIcon: {
    left: 62,
    width: 16,
    height: 16,
    top: 759,
    position: "absolute",
    overflow: "hidden",
  },
  locationInner: {
    top: 763,
    left: 223,
    width: 10,
    height: 10,
    position: "absolute",
  },
  ellipseIcon: {
    top: 425,
    left: 237,
    height: 44,
    width: 44,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 399,
    left: 16,
    width: 401,
    height: 427,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -188,
    top: 141,
    left: "50%",
    borderRadius: Border.br_xl,
    borderWidth: 2,
    width: 376,
    height: 60,
  },
  searchActivitiesBeaches: {
    top: 162,
    left: 59,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  lineView: {
    marginTop: -312,
    left: 317,
    borderRightWidth: 2,
    width: 2,
    height: 34,
    top: "50%",
  },
  locationChild1: {
    top: 903,
    left: 69,
    width: 8,
    height: 8,
    position: "absolute",
  },
  iconSetting: {
    height: "2.34%",
    width: "5.58%",
    top: "26.39%",
    right: "8.6%",
    bottom: "71.27%",
    left: "85.81%",
  },
  rectangleIcon: {
    left: 319,
    width: 111,
  },
  viewAll: {
    textAlign: "left",
    color: Color.colorSilver_200,
    top: 330,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  micIcon: {
    top: 159,
    width: 24,
    height: 24,
  },
  dayStormIcon: {
    top: 13,
    left: 362,
    width: 56,
    height: 50,
    position: "absolute",
  },
  text3: {
    top: 48,
    left: 354,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    position: "absolute",
    textAlign: "center",
  },
  chatbot1Icon: {
    left: 339,
    width: 50,
  },
  fiRrMarkerIcon1: {
    top: 869,
    left: 252,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  image174Icon: {
    left: 141,
    width: 44,
  },
  location: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Home1;
