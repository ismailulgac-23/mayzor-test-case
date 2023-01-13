import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasterCardImage, VisaImage } from "../../../../../../../assets/images";
import { AppSizedBox, AppText } from "../../../../../../ui";
import { appColors, appSpaces } from "../../../../../../../constants/app";

type ICreditCardProps = {
  type: "VISA" | "MASTER_CARD";
  number: string;
};

const CreditCard = ({ type, number }: ICreditCardProps) => {
  const renderImage = () => {
    switch (type) {
      case "MASTER_CARD":
        return MasterCardImage;
      case "VISA":
        return VisaImage;
    }
  };
  return (
    <View style={styles.container}>
      <Image source={renderImage()} style={styles.image} />
      <AppSizedBox width={appSpaces.xxs} />
      <AppText size="body1" color="zinc">
        {number} (Kredi Kartı İle)
      </AppText>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: appColors.bg,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});
