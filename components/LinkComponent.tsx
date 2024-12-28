import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TabBarIcon } from './navigation/TabBarIcon'

interface LinkComponentProps {
    iconFirst: any;
    iconSecond: any;
    onPress: any;
    title: string;
}

const LinkComponent = ({ iconFirst, iconSecond, onPress, title }: LinkComponentProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className='flex-row pt-3 items-center'
        >
            <TabBarIcon name={iconFirst} className='!text-xl !text-zinc-200' />
            <Text className='font-rsemibold text-base text-zinc-200 pl-3 flex-1'>{title}</Text>
            <TabBarIcon name={iconSecond} className='!text-xl !text-zinc-200' />
        </TouchableOpacity>
    )
}

export default LinkComponent