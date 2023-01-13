import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { appColors, appFontFamilies, appFontSizes } from "../../constants/app";

type IAppTextProps = {
  color?: keyof typeof appColors | null;
  isBothColor?: boolean;
  align?: "center" | "auto" | "left" | "right" | "justify";
  size?: keyof typeof appFontSizes;
  family?: keyof typeof appFontFamilies;
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "normal";
  numberOfLines?: number;
  children?: React.ReactNode;
  onPress?: (() => any) | null;
  style?: StyleProp<TextStyle>;
};

const AppText = ({
  color = "darkGray",
  weight = "normal",
  align = "auto",
  size = "subtitle3",
  family = "roboto",
  onPress = null,
  numberOfLines = undefined,
  style = {},
  children,
}: IAppTextProps) => {
  const appStyles = {
    ...(style as any),
    color: appColors[color!],
    fontSize: appFontSizes[size],
    fontWeight: weight,
    textAlign: align,
  };
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text numberOfLines={numberOfLines} style={appStyles}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <Text numberOfLines={numberOfLines} style={appStyles}>
        {children}
      </Text>
    );
  }
};

export default AppText;

const styles = StyleSheet.create({});
