import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "./Item";
import { AppSizedBox } from "../../../../ui";
import { appSpaces } from "../../../../../constants/app";

const List = () => {
  return (
    <View style={{ height: 100 + "%" }}>
      <FlatList
        ItemSeparatorComponent={() => (
          <AppSizedBox height={appSpaces.xxs + 5} />
        )}
        data={Array.from(Array(12).keys())}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <Item />}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
