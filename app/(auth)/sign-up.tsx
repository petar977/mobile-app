import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {

  }

  return (
    <SafeAreaView className="h-full bg-background">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-white font-rsemibold">Sign up to App</Text>
          <FormField
            title="Username"
            placeholder="Enter username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            placeholder="Enter email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            onPress={submit}
            title="Sign up"
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row pt-5 justify-center gap-2">
            <Text className="text-lg font-rregular text-zinc-50">
              Have an account already?
            </Text>
            <Link href="./sign-in" className="text-yellow text-lg font-rregular">
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  );
};

export default SignUp;
