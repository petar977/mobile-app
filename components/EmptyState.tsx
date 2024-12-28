import { View, Text, Image } from 'react-native'
import { images } from '../constants';
import CustomButton from './CustomButton';
import { useRouter } from 'expo-router';

interface EmptyStateProps {
    title: string;
    subtitle?: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
    const router = useRouter();
    return (
        <View className='justify-center items-center px-4'>
            <Image
                source={images.empty}
                className='w-[270px] h-[215px]'
                resizeMode='contain'
            />
            <Text className='text-xl font-rsemibold text-zinc-100 mt-2'>{title}</Text>
            <Text className='font-rregular text-sm text-zinc-300'>{subtitle}</Text>

            <CustomButton 
                title='Create video'
                onPress={() => router.push('./profile')}
                containerStyles='my-5'
            />
        </View>
    )
}

export default EmptyState