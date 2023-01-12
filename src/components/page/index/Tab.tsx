import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors } from "../../../constants/app";
import { AppButton, AppText } from "../../ui";
import { useState } from "react";

type ITabItemProps = {
  title: string;
  selected: boolean;
  onSelect: () => any;
};

const list = ["Tümü", "İptallerim", "İadelerim"];

const TabItem = ({ title, selected, onSelect }: ITabItemProps) => {
  const isSelected = selected;
  return (
    <AppButton
      onPress={() => onSelect()}
      color={isSelected ? "orange" : "bg"}
      width={100}
      radius={5}
      height={40}
    >
      <AppText size="body2" color={isSelected ? "white" : "gray"}>
        {title}
      </AppText>
    </AppButton>
  );
};

const Tab = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.tab}>
      {list.map((item, i) => (
        <TabItem
          title={item}
          key={i}
          selected={selected === i}
          onSelect={() => setSelected(i)}
        />
      ))}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    width: 100 + "%",
    marginTop: -40,
    backgroundColor: appColors.white,
    height: 70,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
