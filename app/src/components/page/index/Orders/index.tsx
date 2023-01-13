import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import List from "./List";
import { AppSizedBox } from "../../../ui";
import { appSpaces } from "../../../../constants/app";

const Orders = () => {
  return (
    <View>
      <Header />
      <AppSizedBox height={appSpaces.xs} />
      <List />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
