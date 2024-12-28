import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  
  const submit = () => {
    router.push("/home")
  }

  return (
    <SafeAreaView className="h-full bg-background">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-white font-rsemibold">Log in to App</Text>
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
          />
          <CustomButton
            onPress={submit}
            title="Sign in"
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row pt-5 justify-center gap-2">
            <Text className="text-lg font-rregular text-zinc-50">
              Don't have an account?
            </Text>
            <Link href="./sign-up" className="text-yellow text-lg font-rregular">Sign up</Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  );
};

export default SignIn;
