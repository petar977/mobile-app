import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import VideoCard from "@/components/VideoCard";
import EmptyState from "@/components/EmptyState";

const HomeScreen = () => {
  const [search, setSearch] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // re-call videos for new videos

    setRefreshing(false);
  }
  return (
    <SafeAreaView className="h-full bg-background">
        <FlatList
          data={[{ "id": 1 }, { "id": 2 }, { "id": 3 },{ "id": 4 }, { "id": 5 }, { "id": 6 },{ "id": 7 }, { "id": 8 }, { "id": 9 },{ "id": 10 }, { "id": 11 }, { "id": 12 }]}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <View className="my-2 px-4 space-y-6">
              <VideoCard posts={[{ "id": 1 }, { "id": 2 }, { "id": 3 },{ "id": 4 }]} />
            </View>
          )}
          
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start mb-4 flex-row">
                <View className="w-60">
                  <Text className="font-rbold text-4xl text-zinc-100">
                    Discover How To Shape The Body
                  </Text>
                </View>
                <View className="">
                  <TabBarIcon name="notifications" className="!text-zinc-100" size={30} />
                </View>
              </View>

              <SearchInput
                placeholder="Search"
                value={search}
                handleChangeText={() => setSearch(search)}       
              />

              <View className="w-full flex-1 flex-row justify-between">
                <View>
                  <Text className="text-white text-xl font-rsemibold my-4">
                    Workout Categories
                  </Text>
                </View>
                <View>
                  <Text className="text-white text-xl font-rsemibold my-4">
                    See all
                  </Text>
                </View>        
              </View>
              <VideoCard posts={[{"id": 1}, {"id": 2}]} />
            </View>
          )}
          ListEmptyComponent={() => (
              <EmptyState 
                title="No Videos Found"
                subtitle="Be the first one to upload a video"
              />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default HomeScreen;
