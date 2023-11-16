import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
export type RootStackPramList = {
  LogIn: undefined;
  ScreenHome: undefined;
}
const Stack = createNativeStackNavigator<RootStackPramList>()

import ScreenLogIn from './src/Screens/Login/ScreenLogIn';
import ScreenHome from "./src/Screens/Home/ScreenHome";

function App(): JSX.Element {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen
              name="LogIn"
              component={ScreenLogIn}
              options={{
                title: "Trending Products"
              }}
          />
        <Stack.Screen
            name="ScreenHome"
            component={ScreenHome}
            options={{
                title: "ScreenHome"
            }}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


