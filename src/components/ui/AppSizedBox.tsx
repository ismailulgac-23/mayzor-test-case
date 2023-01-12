import { StyleSheet, Text, View } from "react-native";
import { SizedBox } from "sizedbox";
import React from "react";

type IAppSizedBoxProps = {
  height?: number;
  width?: number;
  children?: React.ReactNode;
};

const AppSizedBox = ({ height, width, children }: IAppSizedBoxProps) => {
  return (
    <SizedBox horizontal={width} vertical={height}>
      {children}
    </SizedBox>
  );
};

export default AppSizedBox;

const styles = StyleSheet.create({});
