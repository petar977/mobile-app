import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoBox from "@/components/InfoBox";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import FormField from "@/components/FormField";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Picker from "@/components/Picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const personalData = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [weight, setWeigt] = useState<number>();
  const [height, setHeight] = useState<number>();

  const emoji = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="my-6 px-4 space-y-6">
          <View className="flex-row">
            <CustomButton
              onPress={() => {
                router.push("/profile");
              }}
              icon="arrow-back-outline"
              iconColor="white"
              containerStyles="!w-[60] rounded-lg !bg-background"
              activeOpacity={0.2}
            />
            <Text className="text-2xl font-rbold text-zinc-100 self-center ml-14">
              Personal Data
            </Text>
          </View>
          <View className="w-full justify-center items-center mt-5 flex-row">
            <View className="w-40 h-40 border border-yellow rounded-full">
              {/*<Image soruce={} className="w-[90%] h-[90%] rounded-full" resizeMode='cover' /> */}
            </View>
          </View>

          <View>
            <FormField
              title="Username"
              otherStyles="mt-7"
              placeholder="Enter your username"
            />
            <FormField
              title="Email"
              keyboardType="email-address"
              placeholder="Enter your email address"
              otherStyles="my-3"
            />
          </View>

          <View className="w-full my-7 mb-120 flex-row justify-between w">
            <TouchableOpacity onPress={onAddSticker}>
              <InfoBox
                title={weight}
                subtitle="Weight"
                containerStyles="w-28 h-28 p-3 bg-zinc-500 rounded-lg justify-center"
                titlesStyles="!text-yellow !text-2xl"
                subtitleStyles="!text-xl"
              />
            </TouchableOpacity>

            <InfoBox
              title={height}
              subtitle="Height"
              containerStyles="w-28 h-28 p-3 bg-zinc-500 rounded-lg justify-center"
              titlesStyles="!text-yellow !text-2xl"
              subtitleStyles="!text-xl"
            />
            <InfoBox
              title={1}
              subtitle="Age"
              containerStyles="w-28 h-28 p-3 bg-zinc-500 rounded-lg justify-center"
              titlesStyles="!text-yellow !text-2xl"
              subtitleStyles="!text-xl"
            />
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
          >
            {/* <View className="h-[35%] w-full bg-white rounded-t-xl absolute top-1/4 text-center">
              <View className="h-[11%] rounded-t-l px-4 flex-row items-center justify-between">
                <Text className="font-rbold text-xl">Select age</Text>
                <Pressable
                  onPress={onModalClose}
                >
                  <TabBarIcon name="close" color="#000" size={22} />
                </Pressable>
              </View>
              <View className="justify-center ablsolute top-16 h-[50%]">
                <FlatList
                  data={emoji}
                  renderItem={({ item, index }) => (
                    <TouchableHighlight
                      underlayColor="#b0b0b0"
                      className="items-center"
                      onPress={() => {
                        setWeigt(item);
                        onModalClose();
                      }}
                    >
                      <Text className="text-black text-2xl">{item}</Text>
                    </TouchableHighlight>
                  )}
                />
              </View>
            </View> */}
            {}
          </Modal>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default personalData;
