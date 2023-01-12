import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppButton, AppText } from "../../../../../../ui";

type ICreditAndOrderCardInfoProps = {
  orderNumber: number;
};

const CreditAndOrderCardInfo = ({
  orderNumber,
}: ICreditAndOrderCardInfoProps) => {
  return (
    <View>
      <View>
        <AppText>Online Kredi/Banka Kartı</AppText>
        <AppText>1 Sipariş Kargoda - 1 Sipariş Teslim Edildi</AppText>
      </View>
      <AppButton>
        <AppText>Sipariş No: {orderNumber}</AppText>
      </AppButton>
    </View>
  );
};

export default CreditAndOrderCardInfo;

const styles = StyleSheet.create({});
