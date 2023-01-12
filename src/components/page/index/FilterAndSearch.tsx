import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { appColors, appSpaces } from "../../../constants/app";
import { AppButton, AppSizedBox } from "../../ui";
import { getWindowSizes } from "../../../constants/helpers";

const { width, height } = getWindowSizes();
const filterButtonWidth = (width - appSpaces.md) / 7;

const FilterAndSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="mic-outline" size={22} color={appColors.darkGray} />
        <AppSizedBox width={appSpaces.xxs} />
        <TextInput
          style={{ flex: 1, color: appColors.darkGray }}
          placeholder="Siparişlerde ara..."
        />
        <AppButton width={45} height={36} color="bg" radius={5}>
          <Ionicons name="search" size={22} color={appColors.darkGray} />
        </AppButton>
      </View>
      <AppSizedBox width={3 + "%"} />
      <AppButton
        containerStyle={{ width: 100 + "%" }}
        width={17 + "%"}
        height={50}
        color="white"
        radius={5}
      >
        <Ionicons name="filter-outline" size={22} color={appColors.darkGray} />
      </AppButton>
    </View>
  );
};

export default FilterAndSearch;

const styles = StyleSheet.create({
  container: {
    width: 100 + "%",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: 80 + "%",
    height: 50,
    borderRadius: 5,
    backgroundColor: appColors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: appSpaces.xs,
    paddingVertical: 7,
    paddingRight: 7,
  },
});
