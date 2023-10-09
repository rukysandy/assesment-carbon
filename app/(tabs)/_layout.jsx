import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Image, View } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon({ imageSource, color }) {
  return (
    <Image
      source={imageSource}
      style={{ tintColor: color, width: 26, height: 26 }}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#040008", // Set the background color here
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabBarIcon
                imageSource={require("../../assets/images/tabBarHome.png")}
                color={focused ? "#FFF" : "gray"}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: focused ? "#FFFF" : "#040008",
                  margin: 5,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 50,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabBarIcon
                imageSource={require("../../assets/images/tabbarItem.png")}
                color={focused ? "#FFF" : "gray"}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: focused ? "#FFFF" : "#040008",
                  margin: 5,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 50,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabBarIcon
                imageSource={require("../../assets/images/tabBarIcon.png")}
                color={focused ? "#FFF" : "gray"}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: focused ? "#FFFF" : "#040008",
                  margin: 5,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
