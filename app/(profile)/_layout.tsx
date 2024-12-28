import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="personal"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
