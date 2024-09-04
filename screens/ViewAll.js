import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ViewAll = () => {
  return (
    <View style={styles.viewAll}>
      <Image
        style={[styles.iconHome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-home.png")}
      />
      <View style={[styles.viewAllChild, styles.viewBorder]} />
      <Text style={[styles.searchActivitiesBeaches, styles.sortAZTypo]}>
        Search activities, beaches etc.
      </Text>
      <View style={[styles.viewAllItem, styles.viewBorder]} />
      <Image
        style={[styles.viewAllInner, styles.starIconLayout]}
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
      <Text style={[styles.text, styles.textPosition]}>30</Text>
      <Image
        style={[styles.chatbot1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chatbot-1.png")}
      />
      <Text style={[styles.sortAZ, styles.sortAZTypo]}>Sort A-Z</Text>
      <Image
        style={[styles.iconSetting, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon-setting1.png")}
      />
      <GroupComponent1 />
      <GroupComponent maskGroup={require("../assets/mask-group2.png")} />
      <GroupComponent
        propTop={676}
        maskGroup={require("../assets/mask-group3.png")}
        propColor="#002653"
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.text1, styles.kmTypo]}>4.8</Text>
      <Image
        style={[styles.starIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/star-2.png")}
      />
      <Text style={[styles.warkalaGoa, styles.sortAZTypo]}>Warkala, Goa</Text>
      <Text style={[styles.paraglidingPhotoshoot, styles.kmTypo]}>
        <Text style={styles.paragliding}>Paragliding</Text>
        <Text style={styles.photoshoot}>, Photoshoot</Text>
      </Text>
      <Text style={[styles.km, styles.kmTypo]}>5km</Text>
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker3.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon1}
        contentFit="cover"
        source={require("../assets/firrmarker1.png")}
      />
      <Image
        style={[styles.image174Icon, styles.iconLayout]}
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
    position: "absolute",
  },
  starIconLayout: {
    height: 8,
    width: 8,
  },
  textPosition: {
    left: 354,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
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
  viewAllChild: {
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
    fontSize: FontSize.size_base,
  },
  viewAllItem: {
    marginTop: -438,
    top: "50%",
    left: 274,
    borderRightWidth: 2,
    width: 2,
    height: 34,
  },
  viewAllInner: {
    top: 903,
    left: 71,
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
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  chatbot1Icon: {
    top: 856,
    left: 331,
    width: 50,
  },
  sortAZ: {
    top: 105,
    left: 335,
    color: "#535353",
    fontSize: FontSize.size_base,
  },
  iconSetting: {
    height: "2.34%",
    width: "5.58%",
    top: "10.41%",
    right: "86.98%",
    bottom: "87.25%",
    left: "7.44%",
  },
  maskGroupIcon: {
    top: 136,
    left: 27,
    width: 375,
    height: 154,
    position: "absolute",
  },
  rectangleView: {
    top: 146,
    left: 38,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(255, 250, 250, 0.5)",
    width: 353,
    height: 132,
    position: "absolute",
  },
  text1: {
    top: 155,
    left: 363,
    color: Color.colorGray_300,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
  },
  starIcon: {
    top: 156,
    height: 8,
    width: 8,
  },
  warkalaGoa: {
    top: 160,
    left: 51,
    fontSize: FontSize.size_xl,
    width: 186,
    height: 19,
    color: Color.colorGray_300,
  },
  paragliding: {
    color: "#690000",
  },
  photoshoot: {
    color: Color.colorGray_300,
  },
  paraglidingPhotoshoot: {
    top: 253,
    left: 50,
    width: 203,
    fontSize: FontSize.size_base,
  },
  km: {
    top: 184,
    left: 62,
    color: Color.colorGray_300,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
  },
  fiRrMarkerIcon: {
    top: 183,
    left: 52,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  fiRrMarkerIcon1: {
    top: 869,
    left: 241,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  image174Icon: {
    top: 862,
    left: 139,
    width: 44,
  },
  viewAll: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ViewAll;
