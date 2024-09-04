import * as React from "react";
import { View, Dimensions, StyleSheet, Text, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CaroselBeach from "./CaroselBeach";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={[styles.iconHome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-home.png")}
      />
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-112.png")}
      />
      <Text style={[styles.mostVisited, styles.warkalaGoaTypo]}>
        Most Visited
      </Text>
      <Image
        style={[styles.homeItem, styles.homeChildPosition]}
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
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-161.png")}
      />
      <Text style={[styles.exploreTheCoast, styles.exploreTheCoastTypo]}>
        Explore the Coast
      </Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("BeachDescp")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mask-group10.png")}
        />
      </Pressable>
      <Pressable
        style={styles.arrowRightCircle}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-rightcircle1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Text style={[styles.warkalaGoa, styles.warkalaGoaTypo]}>
        Warkala, Goa
      </Text>
      <Text style={[styles.km, styles.kmTypo]}>5km</Text>
      <Text style={[styles.text1, styles.kmTypo]}>4.8</Text>
      <Text style={[styles.text1, styles.kmTypo]}>4.8</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={styles.homeChild1}
        contentFit="cover"
        source={require("../assets/ellipse-92.png")}
      />
      <CaroselBeach />
      <View style={[styles.homeChild2, styles.lineViewBorder]} />
      <Text
        style={[styles.searchActivitiesBeaches, styles.exploreTheCoastTypo]}
      >
        Search activities, beaches etc.
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Image
        style={styles.homeChild3}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.iconSetting, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-setting.png")}
      />
      <Image
        style={[styles.heartIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/heart-icon.png")}
      />
      <Image
        style={[styles.homeChild4, styles.homeChildPosition]}
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
      <Pressable
        style={styles.fiRrMarker}
        onPress={() => navigation.navigate("ViewAll")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firrmarker4.png")}
        />
      </Pressable>
      <Image
        style={[styles.image174Icon, styles.iconPosition]}
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
  homeChildPosition: {
    height: 54,
    top: 312,
    position: "absolute",
  },
  warkalaGoaTypo: {
    color: Color.colorWhite,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
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
  homeInnerPosition: {
    left: 48,
    position: "absolute",
  },
  exploreTheCoastTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  kmTypo: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    top: 759,
    textAlign: "left",
    position: "absolute",
  },
  lineViewBorder: {
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
  homeChild: {
    width: 136,
    borderRadius: Border.br_xl,
    left: 28,
  },
  mostVisited: {
    marginTop: -136,
    left: 51,
    textAlign: "center",
    top: "50%",
  },
  homeItem: {
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
  homeInner: {
    top: 485,
    width: 209,
    height: 340,
  },
  exploreTheCoast: {
    top: 80,
    letterSpacing: 0.1,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xl,
    left: 26,
    color: Color.colorGray_100,
  },
  rectangleIcon: {
    top: 583,
    left: 334,
    width: 218,
    height: 242,
    position: "absolute",
  },
  maskGroup: {
    top: 411,
    width: 270,
    height: 405,
    left: 28,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  arrowRightCircle: {
    left: 152,
    top: 28,
    width: 49,
    height: 49,
    position: "absolute",
  },
  rectangleView: {
    top: 716,
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
  },
  warkalaGoa: {
    top: 727,
    left: 64,
    textAlign: "left",
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
  ellipseIcon: {
    top: 763,
    left: 223,
    width: 10,
    height: 10,
    position: "absolute",
  },
  homeChild1: {
    top: 425,
    left: 237,
    height: 44,
    width: 44,
    position: "absolute",
  },
  homeChild2: {
    marginLeft: -188,
    top: 141,
    left: "50%",
    borderWidth: 2,
    width: 376,
    height: 60,
    borderRadius: Border.br_xl,
  },
  searchActivitiesBeaches: {
    top: 162,
    left: 59,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
  },
  lineView: {
    marginTop: -312,
    left: 317,
    borderRightWidth: 2,
    width: 2,
    height: 34,
    top: "50%",
  },
  homeChild3: {
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
  heartIcon: {
    height: "2.11%",
    width: "5.12%",
    top: "47%",
    right: "37.21%",
    bottom: "50.89%",
    left: "57.67%",
  },
  homeChild4: {
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
  fiRrMarker: {
    left: 252,
    top: 869,
    width: 30,
    height: 30,
    position: "absolute",
  },
  image174Icon: {
    left: 141,
    width: 44,
  },
  home: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    width: 430,
    height: 932,
    overflow: "hidden",
  },
});

export default Home;
