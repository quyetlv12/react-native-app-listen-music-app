import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Download from "./screens/download";
import List from "./screens/list";
import Player from "./screens/player";
import { NativeBaseProvider } from "native-base";
export default function App() {
  const Tab = createBottomTabNavigator();
  const SettingsStack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "playing") {
                return (
                  <AntDesign
                    name={focused ? "play" : "play"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Danh sách nhạc") {
                return (
                  <Ionicons
                    name={focused ? "list" : "list"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Tải về") {
                return (
                  <FontAwesome
                    name={focused ? "download" : "download"}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: "#333",
            tabBarActiveTintColor: "tomato",
          })}
        >
          <Tab.Screen name="playing">
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen name="Đang phát" component={Player} />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Danh sách nhạc">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen
                  headerShown={false}
                  name="Danh sách"
                  component={List}
                />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Tải về">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Tải nhạc" component={Download} />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
