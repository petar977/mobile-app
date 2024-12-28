import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TabBarIcon } from './navigation/TabBarIcon';
import { images } from '../constants';

interface VideoCardProps {
  posts: { [id: string]: number }[];

}

const VideoCard = ({ posts }: VideoCardProps) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => (item.id.toString())}
      renderItem={({ item }) => (
        <View className='items-center w-[38vh]'>
          
          <TouchableOpacity
            className='w-full h-52 rounded-xl relative justify-center items-center pr-4'
            activeOpacity={0.9}
          >
            <Image source={images.gym}
              className='w-full h-full rounded-xl mt-3'
              resizeMode='cover'
            />
          </TouchableOpacity>

          <TouchableOpacity 
            className='absolute top-3 right-6'
            onPress={() => setBookmark(!bookmark)}
          >
            
              <TabBarIcon name={!bookmark ? "bookmark-outline" : "bookmark"} className="text-black" />
            
          </TouchableOpacity>

          <View className='flex-row justify-center items-center absolute bottom-1 pr-4'>
            <View className='justify-center flex-1 ml-3'>
              <Text
                className='text-zinc-100 font-rbold text-sm'
                numberOfLines={1}
              >
                {item.id}
              </Text>
            </View>
            <TabBarIcon name="ellipsis-vertical-outline" className="!text-zinc-400" />
          </View>

        </View>
      )}
      horizontal
    />
  );
}

export default VideoCard