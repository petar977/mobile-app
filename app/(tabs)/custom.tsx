import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import VideoCard from "@/components/VideoCard";
import { useRouter } from "expo-router";

const CustomPage = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full bg-background">
        <View className="h-full px-4">
          <Text className="font-rbold text-xl text-zinc-100 my-5">Custom Training</Text>

          <FlatList
          data={[{ "id": 1 }, { "id": 2 }, { "id": 3 },{ "id": 4 }, { "id": 5 }, { "id": 6 },{ "id": 7 }, { "id": 8 }, { "id": 9 },{ "id": 10 }, { "id": 11 }, { "id": 12 }]}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <VideoCard posts={[{ "id": 1 }, { "id": 2 }, { "id": 3 },{ "id": 4 }]} />
          )}      
          />

          <CustomButton
            onPress={() => {router.push("/create")}}
            title="New"
            containerStyles="absolute bottom-2 right-4 rounded-3xl !w-28 min-h-[45px]"
            icon="add-outline"
            textStyles="ml-1 text-lg"
          />
        </View>
    </SafeAreaView>
  );
};

export default CustomPage;
