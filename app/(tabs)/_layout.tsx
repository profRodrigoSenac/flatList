import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, TextInput } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "rgb(25, 21, 21)",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0ff",
        },
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 18,
          color: "#ffffffff",
        },
        tabBarActiveTintColor: "#f8f8f8",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "rgb(22, 19, 13)",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          height: Platform.OS === "ios" ? 88 : 64,
          paddingBottom: Platform.OS === "ios" ? 30 : 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >

      <View style={styles.input}>
      <TextInput
      placeholder="Buscar..."
      >
      </TextInput>
      </View>

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
        name="input"
        options={{
          title: "inputBusca",
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
        name="flat"
        options={{
          title: "FlatList",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="filme"
        options={{
          title: "Filme",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "eye" : "eye"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
        
  input: {
    backgroundColor: 'white',
    width: '10%',
    height: 'auto'
  }

})
