import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistoryScreen from "./navigator/history/HistoryScreen";
import HomeScreen from "./navigator/home/Home";
import LearningScreen from "./navigator/learning/LearingScreen";
import { Provider } from "react-redux";
export default function App() {
  const Tab = createBottomTabNavigator();
  const SettingsStack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();
  return (
    // <Provider store={}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <AntDesign
                    name={focused ? "home" : "home"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Done") {
                return (
                  <Ionicons
                    name={focused ? "checkmark-done" : "checkmark-done"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "History") {
                return (
                  <FontAwesome
                    name={focused ? "history" : "history"}
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
          <Tab.Screen name="Home">
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen name="Trang chủ" component={HomeScreen} />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Done">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen
                  name="Đã hoàn thành"
                  component={LearningScreen}
                />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="History">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Lịch sử" component={HistoryScreen} />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
