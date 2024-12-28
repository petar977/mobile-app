import { View, Text } from 'react-native'
import React from 'react'

interface InfoBox {
    containerStyles?: string;
    titlesStyles?: string;
    subtitleStyles?: string;
    title: number | string | undefined;
    subtitle: string;
}

const InfoBox = ({containerStyles,subtitle,title,titlesStyles, subtitleStyles}:InfoBox) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-zinc-200 text-center font-rsemibold text-xl ${titlesStyles}`}>{title}</Text>
      <Text className={`text-zinc-200 text-base font-rbold text-center ${subtitleStyles}`}>{subtitle}</Text>
    </View>
  )
}

export default InfoBox