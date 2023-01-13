import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppButton, AppSizedBox, AppText } from "../../../../../../ui";
import { appSpaces } from "../../../../../../../constants/app";

type ICreditAndOrderCardInfoProps = {
  orderNumber: number;
};

const CreditAndOrderCardInfo = ({
  orderNumber,
}: ICreditAndOrderCardInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <AppText size="body2" color="zinc" weight="500">
          Online Kredi/Banka Kartı
        </AppText>
        <AppText size="body3">
          1 Sipariş Kargoda - 1 Sipariş Teslim Edildi
        </AppText>
      </View>
      <AppSizedBox height={appSpaces.xxs} />
      <AppButton
        color="lightOrange"
        height={35}
        radius={5}
        style={styles.right}
      >
        <AppText color="zinc" size="body3">
          Sipariş No: {orderNumber}
        </AppText>
      </AppButton>
    </View>
  );
};

export default CreditAndOrderCardInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  left: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: appSpaces.xs,
  },
});
