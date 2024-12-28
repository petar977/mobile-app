import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

interface SearchInputProps {
  value: string | undefined;
  handleChangeText?: (e:any) => void;
  placeholder: string;
  keyboardType?: string;
}

const SearchInput = ({value, handleChangeText, placeholder, ...props}: SearchInputProps) => {

  return (
    <View className="w-full h-16 px-4 rounded-2xl border border-darkGray focus:border-yellow items-center flex-row bg-darkGray">
      <TouchableOpacity >
        <TabBarIcon name="search" className='text-black' />
      </TouchableOpacity>
      <TextInput
        className="flex-1 text-white text-lg pl-3"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        onChangeText={handleChangeText}
        focusable
      />
    </View>
  );
}

export default SearchInput;