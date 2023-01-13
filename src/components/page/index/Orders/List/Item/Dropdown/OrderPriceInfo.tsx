import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AppSizedBox, AppText } from "../../../../../../ui";
import { appSpaces } from "../../../../../../../constants/app";

type IListItemProps = {
  name: string;
  value: string;
};

const ListItem = ({ name, value }: IListItemProps) => {
  return (
    <View style={styles.listItem}>
      <AppText weight="bold" color="zinc" size="subtitle3">
        {name}
      </AppText>
      <AppText size="body1">{value}</AppText>
    </View>
  );
};

const Campaign = () => {
  return (
    <View style={styles.campaign}>
      <View style={styles.campaignLeft}>
        <AppText color="purple" weight="600">
          Kampanya
        </AppText>
        <AppSizedBox height={appSpaces.xxs} />
        <AppText color="purple" style={{ maxWidth: 90 + "%" }}>
          Seçili giyim ve ayakkabı ürünlerinizde 200 TL üzeri alışverişlerde 20
          TL kazanın.
        </AppText>
      </View>
      <AppText color="purple">132,98</AppText>
    </View>
  );
};

const OrderPriceInfo = () => {
  return (
    <View>
      <ListItem name="Kargo" value="13,28" />
      <AppSizedBox height={appSpaces.xxs} />
      <ListItem name="Ürünler" value="1.322,28" />
      <AppSizedBox height={appSpaces.xxs} />
      <Campaign />
    </View>
  );
};

export default OrderPriceInfo;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  campaign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  campaignLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
