import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ProductImage } from "../../assets/images";
import { AppButton, AppSizedBox, AppText } from "../ui";
import { appSpaces } from "../../constants/app";
import { Ionicons } from "@expo/vector-icons";

type IProductItemProps = {
  title: string;
  deliveryDate: string;
  oldPrice: string;
  price: string;
};

const ProductItem = ({
  title,
  deliveryDate,
  oldPrice,
  price,
}: IProductItemProps) => {
  return (
    <View style={styles.product}>
      <View style={styles.left}>
        <Image source={ProductImage} style={styles.image} />
        <AppSizedBox width={appSpaces.xxs} />
        <View style={styles.info}>
          <AppText numberOfLines={1} size="subtitle3" color="zinc">
            {title}
          </AppText>
          <AppText size="body2">{deliveryDate}</AppText>
          <View style={styles.infoFooter}>
            <AppText size="body3" color="darkGray">
              {oldPrice}
            </AppText>
            <AppSizedBox width={2} />
            <AppText size="body2" color="zinc" weight="bold">
              {price}
            </AppText>
          </View>
        </View>
      </View>
      <AppButton
        style={{ flex: 0.3 }}
        width={40}
        height={40}
        color="bg"
        radius={5}
      >
        <Ionicons name="star" size={18} />
      </AppButton>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  infoFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.7,
  },
});
