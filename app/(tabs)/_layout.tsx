import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "rgb(133, 6, 6)",
          elevation: 0,
          shadowOpacity: 0,
          
        },
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 18,
          color: "#ffffffff",
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "rgb(133, 6, 6)",
          borderTopWidth: 1,
         
          height: Platform.OS === "ios" ? 20 : 64,
          paddingBottom: Platform.OS === "ios" ? 30 : 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

            <Tabs.Screen
        name="filme"
        options={{
          title: "TITULO FILME",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="flex"
        options={{
          title: "Flexbox",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="view"
        options={{
          title: "View",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          title: "Imagem",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="btnTouch"
        options={{
          title: "Botão",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="input"
        options={{
          title: "Input",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="flat"
        options={{
          title: "FlatList",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
