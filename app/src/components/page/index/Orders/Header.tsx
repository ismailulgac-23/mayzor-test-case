import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppText } from "../../../ui";

const Header = () => {
  return (
    <View style={styles.header}>
      <AppText color="zinc" size="subtitle2" weight="500">
        Siparişlerim
      </AppText>
      <AppText size="body3">Toplam 3 Adet</AppText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
