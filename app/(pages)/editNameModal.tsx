import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

const editNameModal = () => {
    const isPresented = router.canGoBack();

    return (
      <View>
        <Text>Modal screen</Text>
        {!isPresented && <Link href="../">Dismiss modal</Link>}
      </View>
    );
  }

export default editNameModal