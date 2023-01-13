import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppSizedBox, AppText } from "../../../../../../ui";
import { appSpaces } from "../../../../../../../constants/app";

type IOrderNoteProps = {
  note: string;
};

const OrderNote = ({ note }: IOrderNoteProps) => {
  return (
    <View style={styles.container}>
      <AppText weight="600" color="zinc">
        Sipariş Notu
      </AppText>
      <AppSizedBox height={2} />
      <AppText color="darkGray" size="body3">
        {note}
      </AppText>
    </View>
  );
};

export default OrderNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
