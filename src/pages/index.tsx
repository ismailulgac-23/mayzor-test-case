import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getWindowSizes } from "../constants/helpers";
import { FilterAndSearch, Header, Orders, Tab } from "../components/page/index";

const IndexPage = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ ...getWindowSizes() }} horizontal={false}>
        <View style={styles.container}>
          <Header />
          <Tab />
          <FilterAndSearch />
          <Orders />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    ...getWindowSizes(),
  },
});
