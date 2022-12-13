import { NativeStackScreenProps } from "@react-navigation/native-stack";

export {};

export type RootStackParamList = {
  notFound: undefined;
  initialAcess: undefined;
  main: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
