import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <Image
        style={styles.iconHome}
        contentFit="cover"
        source={require("../assets/icon-home.png")}
      />
      <Text style={styles.welcomeUser}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.welcome}>{`User `}</Text>
      </Text>
      <Image
        style={[styles.chatbot1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/chatbot-1.png")}
      />
      <Image
        style={styles.fiRrMarkerIcon}
        contentFit="cover"
        source={require("../assets/firrmarker4.png")}
      />
      <Image
        style={[styles.image174Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-174.png")}
      />
      <Image
        style={styles.image176Icon}
        contentFit="cover"
        source={require("../assets/image-176.png")}
      />
      <View style={[styles.userProfileChild, styles.userLayout]} />
      <View style={[styles.userProfileItem, styles.image177IconPosition]} />
      <View style={[styles.userProfileInner, styles.userLayout]} />
      <Image
        style={[styles.image177Icon, styles.image177IconPosition]}
        contentFit="cover"
        source={require("../assets/image-177.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 45,
    top: 859,
    position: "absolute",
  },
  userLayout: {
    height: 34,
    width: 34,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_7xs,
  },
  image177IconPosition: {
    left: 66,
    position: "absolute",
  },
  iconHome: {
    height: "2.47%",
    width: "5.35%",
    top: "93.45%",
    right: "80.23%",
    bottom: "4.08%",
    left: "14.42%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcome: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  welcomeUser: {
    top: 34,
    left: 26,
    fontSize: FontSize.size_11xl,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  chatbot1Icon: {
    left: 339,
    width: 50,
  },
  fiRrMarkerIcon: {
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
  image176Icon: {
    top: 35,
    left: 362,
    width: 36,
    height: 35,
    position: "absolute",
  },
  userProfileChild: {
    top: 99,
    left: 32,
    position: "absolute",
  },
  userProfileItem: {
    top: 173,
    height: 34,
    width: 34,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_7xs,
  },
  userProfileInner: {
    top: 162,
    left: 143,
    position: "absolute",
  },
  image177Icon: {
    top: 133,
    width: 100,
    height: 164,
  },
  userProfile: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default UserProfile;
