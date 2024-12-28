import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const IndexPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className='h-full bg-background'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh]'>
            <Text className='font-bold'>IndexPage</Text>
            <CustomButton onPress={() => router.push('./sign-in')} title="Press Me" isLoading={isSubmitting}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default IndexPage;