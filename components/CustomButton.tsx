import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { TabBarIcon } from "./navigation/TabBarIcon";

interface CustomButtonProps {
  onPress: () => void;
  title?: string;
  textStyles?: string;
  containerStyles?: string;
  isLoading?: boolean;
  icon?: any;
  iconColor?: string;
  activeOpacity?: number | undefined; 
}

const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
  isLoading,
  icon,
  iconColor,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={onPress}
      className={`flex-row min-h-[60px] w-full items-center justify-center rounded-2xl bg-yellow ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {icon !== undefined && <TabBarIcon name={icon} color={iconColor} />}
      {title !== undefined && <Text className={`flex font-rbold text-xl text-black ${textStyles}`}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
