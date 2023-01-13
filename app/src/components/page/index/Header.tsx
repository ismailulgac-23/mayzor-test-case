import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors, appSpaces } from "../../../constants/app";
import { AppButton, AppSizedBox, AppText } from "../../ui";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.inner}>
        <AppButton radius={5} width={66} height={40} color="darkPurple">
          <Ionicons name="person-outline" size={22} color={appColors.white} />
        </AppButton>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText weight="500" color="white" size="subtitle2">
            MAYZOR
          </AppText>
          <AppText weight="500" color="white" size="subtitle2">
            TEST CASE
          </AppText>
        </View>
        <AppButton
          radius={5}
          width={66}
          height={40}
          color="orange"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="cart-outline" size={22} color={appColors.white} />
          <AppSizedBox width={appSpaces.xxs - 2} />
          <AppText color="white" size="body3">
            (0)
          </AppText>
        </AppButton>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: 100 + "%",
    height: 140,
    backgroundColor: appColors.purple,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    width: 100 + "%",
    justifyContent: "space-between",
    padding: appSpaces.md,
  },
});
