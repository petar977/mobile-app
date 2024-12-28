import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import VideoCard from "@/components/VideoCard";
import FormField from "@/components/FormField";

const createPage = () => {
  const router = useRouter();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const openModal = async () => {
    setShowAppOptions(true);
  };

  const closeModal = async () => {
    setShowAppOptions(false);
  };

  return (
  <SafeAreaView className="h-full bg-background">
      <View  className="my-2 space-y-6">
        <View className="flex-row items-center">
          <CustomButton
            onPress={() => {
              router.push("/custom");
            }}
            icon="arrow-back-outline"
            iconColor="white"
            containerStyles="!w-[60] rounded-lg !bg-background"
            activeOpacity={0.2}
          />
          <TouchableOpacity className="min-w-[335px] ml-3" onPress={openModal}>
            <View className="flex-row items-baseline">
              <Text className="text-zinc-100 text-lg font-rbold w-fit mr-2">
                New Training
              </Text>
              <TabBarIcon name="pencil" size={16} color="white" />
            </View>

            <Text className="text-zinc-100 text-xs font-rregular">
              Edit mode
            </Text>
          </TouchableOpacity>
        </View>

          <Text className="text-center text-zinc-100 my-3 font-rregular text-sm">
            Please select first exercise
          </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showAppOptions}
          onRequestClose={closeModal}
        >
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
            <View className="h-screen justify-end items-center">
              <Pressable
                className="h-screen w-full bg-slate-800 opacity-75 absolute top-0 right-0"
                onPress={closeModal}
              ></Pressable>
              <View className="w-full rounded-3xl bg-zinc-100 items-center">
                <View className="w-11/12 mt-3">
                  <FormField
                    title="Edit traning name"
                    placeholder="Enter training name"
                    handleChangeText={(e) => {
                      setText(e);
                    }}
                    value={text}
                    otherStyles="mb-3"
                    titleStyles="ml-3 !text-[black] font-rbold"
                    inputStyles="!text-[black] font-rregular"
                    autoFocus={true}
                  />
                  <View className="flex-row justify-between mb-3">
                    <CustomButton
                      title="Cancel"
                      onPress={closeModal}
                      containerStyles="!w-[175] !bg-white border-r-2 border-zinc-500"
                    />
                    <CustomButton
                      title="Save"
                      onPress={() => {}}
                      containerStyles="!w-[175] !bg-white"
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>

        <View className="bg-zinc-200 rounded-xl h-[100%]">
          {/* <FlatList
            data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <VideoCard posts={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
            )}
          /> */}

          <CustomButton
            onPress={() => {}}
            icon="add-circle-outline"
            containerStyles="bg-zinc-100"
            title="Add an exercises"
            textStyles="text-lg ml-2"
            activeOpacity={0.7}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default createPage;
