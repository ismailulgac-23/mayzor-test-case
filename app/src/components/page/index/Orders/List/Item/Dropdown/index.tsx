import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors, appSpaces } from "../../../../../../../constants/app";
import { AppSizedBox } from "../../../../../../ui";
import CreditAndOrderCardInfo from "./CreditAndOrderCardInfo";
import Border from "./Border";
import CreditCard from "./CreditCard";
import OrderPriceInfo from "./OrderPriceInfo";
import OrderNote from "./OrderNote";
import ProductView from "./ProductView";

const Dropdown = () => {
  return (
    <View style={styles.wrapper}>
      <Border />
      <View style={styles.dropdownContainer}>
        <CreditAndOrderCardInfo orderNumber={2214214} />
        <Border isTop />
        <CreditCard number="5269 11** **** 8044" type="VISA" />
        <AppSizedBox height={appSpaces.xs} />
        <OrderPriceInfo />
        <Border />
        <OrderNote note="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        <Border />
        <ProductView
          receiverName="Miraç Yıldırım"
          cardType="IS_DELIVERED"
          products={[]}
        />
        {/*         <Border />
        <ProductView cardType="IS_CANCELLED" products={[]} /> */}
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: appSpaces.xs,
    paddingBottom: appSpaces.xl,
    paddingHorizontal: appSpaces.sm,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: appColors.white,
  },
  dropdownContainer: {
    marginTop: appSpaces.xxs,
  },
});
