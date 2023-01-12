import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { appColors } from "../../constants/app";

type IAppButtonProps = {
  width?: number | "full";
  height?: number;
  radius?: number;
  onPress?: () => any;
  center?: boolean;
  color?: keyof typeof appColors;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const AppButton = ({
  radius = 0,
  width,
  height,
  onPress,
  style,
  center = true,
  containerStyle,
  color = "transparent",
  disabled = false,
  children,
}: IAppButtonProps) => {
  if (disabled) {
    return (
      <View style={{ alignItems: "baseline", ...(containerStyle as any) }}>
        <View
          style={{
            opacity: 0.7,
            justifyContent: center ? "center" : "flex-start",
            alignItems: center ? "center" : "flex-start",
            width: width == "full" ? 100 + "%" : width,
            height,
            borderRadius: radius,
            ...(style as any),
          }}
        >
          {children}
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "baseline", ...(containerStyle as any) }}>
        <TouchableOpacity
          style={{
            justifyContent: center ? "center" : "flex-start",
            alignItems: center ? "center" : "flex-start",
            width: width == "full" ? 100 + "%" : width,
            height,
            borderRadius: radius,
            backgroundColor: appColors[color],
            ...(style as any),
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  }
};

export default AppButton;

const styles = StyleSheet.create({});
