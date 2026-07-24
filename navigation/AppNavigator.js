import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import FavoritosScreen from "../screens/FavoritosScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#242424",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#121212",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Top 5 Studio Ghibli",
            headerRight: () => (
              <IconButton
                icon="heart"
                iconColor="#d3a95f"
                onPress={() => navigation.navigate("Favoritos")}
                style={{ marginTop: -1 }}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Favoritos"
          component={FavoritosScreen}
          options={{
            title: "Meus Favoritos",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
