import InfoBox from '@/components/InfoBox';
import LinkComponent from '@/components/LinkComponent';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfileScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(false)
  const toggleSwitch = () => setNotifications(previousState => !previousState);
  const logout = async () => {

  }

  return (
    <SafeAreaView className='h-full bg-background'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="my-6 px-4 space-y-6">
          <View className='w-full justify-start items-center mt-5 flex-row'>
            <View className='w-32 h-32 border border-yellow rounded-full'>
              {/*<Image soruce={} className="w-[90%] h-[90%] rounded-full" resizeMode='cover' /> */}
            </View>
            <View className='pl-6'>
              <Text className='font-rbold text-2xl text-zinc-200'>
                Petar Petrovic
              </Text>
              <Text className='font-rregular text-base text-zinc-200'>
                email@gmail.com
              </Text>
            </View>
          </View>
          
          <View className='w-full my-7 mb-120 flex-row justify-between'>
            <InfoBox title='300kg' subtitle='Weight' containerStyles='p-3 bg-zinc-500 rounded-lg ' titlesStyles='text-yellow' />
            <InfoBox title='300kg' subtitle='Height' containerStyles='p-3 bg-zinc-500 rounded-lg ' titlesStyles='text-yellow' />
            <InfoBox title='300kg' subtitle='Age' containerStyles='p-3 bg-zinc-500 rounded-lg ' titlesStyles='text-yellow' />
          </View>

          <View className='w-full'>
            <Text className='font-rbold text-xl text-zinc-200 border-b border-zinc-500'>Account</Text>

            <LinkComponent title="Personal Data" onPress={() => router.push("../personal")} iconFirst="person-outline" iconSecond="chevron-forward-outline" />
            <LinkComponent title="Achivment" onPress={() => router.push("./profile")} iconFirst="reader-outline" iconSecond="chevron-forward-outline" />
            <LinkComponent title="Activity History" onPress={() => router.push("../create")} iconFirst="pie-chart-outline" iconSecond="chevron-forward-outline" />
            <LinkComponent title="Bookmark" onPress={() => router.push("./home")} iconFirst="bookmark-outline" iconSecond="chevron-forward-outline" />

            <TouchableOpacity
              className='flex-row pt-3 items-center'
              onPress={logout}
            >
              <TabBarIcon name="exit-outline" className='!text-xl !text-zinc-200' />
              <Text className='font-rsemibold text-base text-zinc-200 pl-3 flex-1'>Log Out</Text>
              <TabBarIcon name="chevron-forward-outline" className='!text-xl !text-zinc-200' />
            </TouchableOpacity>

          </View>

          <View className='w-full mt-6'>
            <Text className='font-rbold text-xl text-zinc-200 border-b border-zinc-500'>Notifications</Text>

            <TouchableOpacity className='flex-row items-center' onPress={toggleSwitch}>
              <TabBarIcon name="notifications-outline" className='!text-xl font-rsemibold !text-zinc-200 ' />
              <Text className='font-rsemibold text-base text-zinc-200 pl-3 flex-1'>Pop-Up notification</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#E0FE10' }}
                thumbColor={"#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={notifications}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

