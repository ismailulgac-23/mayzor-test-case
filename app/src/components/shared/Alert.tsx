import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppSizedBox, AppText } from "../ui";
import { appColors, appSpaces } from "../../constants/app";
import { CheckBigImage, CloseImage } from "../../assets/images";

type IAlertProps = {
  type: "danger" | "success";
  title: string;
  subtitle: string;
};

const Alert = ({ type, title, subtitle }: IAlertProps) => {
  return (
    <View
      style={{
        ...styles.alert,
        backgroundColor:
          type == "danger" ? appColors.lightRed : appColors.lightGreen,
      }}
    >
      <Image
        source={type == "danger" ? CloseImage : CheckBigImage}
        style={styles.image}
      />
      <AppSizedBox width={appSpaces.xxs} />
      <View>
        <AppText size="body2" color="zinc">
          {title}
        </AppText>
        <AppText size="body3" color={type == "danger" ? "red" : "green"}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  alert: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
});
