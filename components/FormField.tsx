import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

interface FormFieldProps {
  title?: string;
  value?: string;
  handleChangeText?: (e:any) => void;
  placeholder?: string;
  otherStyles?: string;
  keyboardType?: any | undefined;
  titleStyles?: string;
  inputStyles?: string;
  autoFocus?: boolean | undefined;
}

const FormField = ({title, value, handleChangeText, placeholder, otherStyles, titleStyles, inputStyles, ...props}: FormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-zinc-100 font-rregular ${titleStyles}`}>{title}</Text>
      <View className="border-2 w-full h-16 px-4 rounded-3xl focus:border-yellow items-center flex-row">
        <TextInput className={`flex-1 text-white font-rregular text-base ${inputStyles}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          focusable
          keyboardType={props.keyboardType}
          autoFocus={props.autoFocus}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <TabBarIcon name={!showPassword ? 'eye-outline' : 'eye-off-outline'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField