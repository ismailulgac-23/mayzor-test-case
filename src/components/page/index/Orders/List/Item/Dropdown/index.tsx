import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors, appSpaces } from "../../../../../../../constants/app";
import { AppSizedBox } from "../../../../../../ui";
import CreditAndOrderCardInfo from "./CreditAndOrderCardInfo";

const Dropdown = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.border} />
      <View style={styles.dropdownContainer}>
        <CreditAndOrderCardInfo orderNumber={2214214} />
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: appSpaces.xs,
    paddingHorizontal: appSpaces.sm,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: appColors.white,
  },
  border: {
    width: 100 + "%",
    height: 1,
    backgroundColor: appColors.bg,
    marginBottom: appSpaces.xs,
  },
  dropdownContainer: {
    marginTop: appSpaces.xxs,
  },
});
