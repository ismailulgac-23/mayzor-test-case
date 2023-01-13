import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors, appSpaces } from "../../../../../../../constants/app";

const Border = ({ isTop = false }) => {
  return (
    <View
      style={{
        ...styles.border,
        marginTop: isTop ? appSpaces.xs : undefined,
      }}
    />
  );
};

export default Border;

const styles = StyleSheet.create({
  border: {
    width: 100 + "%",
    height: 1,
    backgroundColor: appColors.bg,
    marginBottom: appSpaces.xs,
  },
});
