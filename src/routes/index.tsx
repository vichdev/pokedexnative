import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./stack.routes";
import React from "react";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
