import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors, appSpaces } from "../../../../../../constants/app";
import { CheckImage, ProductImage } from "../../../../../../assets/images";
import { AppButton, AppSizedBox, AppText } from "../../../../../ui";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Item = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <View>
      <AppButton
        onPress={() => setIsShowDropdown(!isShowDropdown)}
        style={styles.item}
      >
        <Image source={ProductImage} style={styles.image} />
        <AppSizedBox width={appSpaces.xxs + 3} />
        <View>
          <AppText size="subtitle3" color="zinc">
            15 Ara 2021 14:09
          </AppText>
          <AppText size="body3" color="darkGray">
            Toplam 2 Sipariş
          </AppText>
        </View>
        <AppSizedBox width={appSpaces.sm} />
        <View style={styles.badge}>
          <AppText size="body2">5.552,10 ₺</AppText>
          <Ionicons
            name={isShowDropdown ? "chevron-down" : "chevron-forward"}
            size={15}
            color={appColors.darkGray}
          />
        </View>
        <Image source={CheckImage} style={styles.checkImage} />
      </AppButton>
      {isShowDropdown && <Dropdown />}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    width: 100 + "%",
    position: "relative",
    paddingVertical: appSpaces.xs + 3,
    paddingHorizontal: appSpaces.sm,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  badge: {
    width: 99,
    height: 35,
    backgroundColor: appColors.bg,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkImage: {
    position: "absolute",
    top: -5,
    right: 0,
    width: 15,
    height: 15,
  },
});
