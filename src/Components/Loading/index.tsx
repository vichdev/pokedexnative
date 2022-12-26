import React, { useEffect } from "react";
import { ActivityIndicatorProps } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../styles/theme";

import { LoadingWrapper, LoadingIndicator } from "./styles";

const Loading: React.FC<ActivityIndicatorProps> = ({
  size = "large",
  color = theme.colors.yellow,
}) => {
  const isLoading = useSelector((state: any) => state.general.isLoading);

  useEffect(() => {
    console.log(isLoading);
  }, []);

  return (
    <LoadingWrapper>
      <LoadingIndicator size={size} animating={isLoading} color={color} />
    </LoadingWrapper>
  );
};

export default Loading;
