import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const FeedScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed Screen</Text>
    </View>
  );
};

const CatalogScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog Screen</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account Screen</Text>
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const SignInScreen = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

const SignUpScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up Screen</Text>
      <Button title="Title" onPress={() => props.navigation.navigate("Main")} />
    </View>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
