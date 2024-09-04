const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ViewAll from "./screens/ViewAll";
import LandingPage from "./screens/LandingPage";
import Home1 from "./screens/Home1";
import UserProfile from "./screens/UserProfile";
import BeachDescp from "./screens/BeachDescp";
import ViewAll1 from "./screens/ViewAll1";
import Day from "./components/Day";
import Home from "./components/Home";
import Night from "./components/Night";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ViewAll"
              component={ViewAll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BeachDescp"
              component={BeachDescp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewAll1"
              component={ViewAll1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LandingPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
