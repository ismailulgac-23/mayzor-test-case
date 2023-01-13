import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Alert from "../../../../../../shared/Alert";
import { AppButton, AppSizedBox, AppText } from "../../../../../../ui";
import { appColors, appSpaces } from "../../../../../../../constants/app";
import ProductItem from "../../../../../../shared/ProductItem";

let actions = [
  "Değerlendir",
  "Fatura Göster",
  "Kargo Takip",
  "Sorun Bildir",
  "İade Talebi",
  "Oy Kullan",
];

type IProductViewProps = {
  cardType: "IS_DELIVERED" | "IS_CANCELLED";
  receiverName?: string;
  products: Array<any>;
};

const ProductView = ({
  cardType,
  receiverName,
  products,
}: IProductViewProps) => {
  const renderCard = () => {
    switch (cardType) {
      case "IS_CANCELLED":
        return (
          <Alert
            type="danger"
            title="İptal işlemi sağlandı"
            subtitle={`İptal tarihi 16 Ara Per; 18:09`}
          />
        );
      case "IS_DELIVERED":
        return (
          <Alert
            type="success"
            title={`${receiverName} adlı kişiye teslim edildi.`}
            subtitle={`Teslim tarihi 16 Ara Per; 18:09`}
          />
        );
    }
  };

  const renderActions = () => {
    return (
      <FlatList
        data={actions}
        horizontal={false}
        scrollEnabled={false}
        style={styles.actions}
        renderItem={({ item, index }) => (
          <AppButton
            key={index}
            style={styles.actionItem}
            containerStyle={{
              width: 100 + "%",
            }}
            height={40}
            radius={5}
          >
            <AppText size="body2">{item}</AppText>
          </AppButton>
        )}
      />
    );
  };

  const renderProducts = () => {
    return (
      <FlatList
        ItemSeparatorComponent={() => <AppSizedBox height={appSpaces.xxs} />}
        data={[1, 2, 3]}
        renderItem={({ item, index }) => (
          <ProductItem
            oldPrice="99,45"
            price="45,44"
            deliveryDate="11 Kasım"
            title="DeFacto Slim Fit Kapüşonlu Fermu"
          />
        )}
      />
    );
  };

  return (
    <View>
      {renderCard()}
      <AppSizedBox height={appSpaces.xs} />
      {renderActions()}
      <AppSizedBox height={appSpaces.xs} />
      {renderProducts()}
    </View>
  );
};

export default ProductView;

const styles = StyleSheet.create({
  actions: {
    width: 100 + "%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  actionItem: {
    width: 100,
    backgroundColor: appColors.bg,
    marginBottom: appSpaces.xs,
    paddingHorizontal: 5,
  },
});
