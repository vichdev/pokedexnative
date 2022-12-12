import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import InitialAcess from "../Components/InitialAcess";
import Main from "../views/Main";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="InitialAcess">
      <Screen
        name="initialAcess"
        options={{
          headerShown: false,
        }}
        component={InitialAcess}
      />
      <Screen
        name="main"
        options={{
          headerTitle: "Home",
        }}
        component={Main}
      />
    </Navigator>
  );
};

export default AppRoutes;
