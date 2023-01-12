import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getWindowSizes } from "../constants/helpers";
import { FilterAndSearch, Header, Orders, Tab } from "../components/page/index";
import { appColors, appSpaces } from "../constants/app";
import { AppSizedBox } from "../components/ui";

const IndexPage = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ ...getWindowSizes() }} horizontal={false}>
        <View style={styles.container}>
          <Header />
          <View style={styles.inner}>
            <Tab />
            <AppSizedBox height={appSpaces.xs} />
            <FilterAndSearch />
            <AppSizedBox height={appSpaces.xs} />
            <Orders />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    ...getWindowSizes(),
    backgroundColor: "#f4f6fb",
  },
  inner: {
    marginHorizontal: appSpaces.md,
  },
});
