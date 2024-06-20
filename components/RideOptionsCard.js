import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  }
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView className='bg-white flex-grow'>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          className='absolute top-3 left-5 z-50 p-3 rounded-full' 
        >
          <Icon
            name='chevron-left'
            type='fontawesome'
            size={32}
          />
        </TouchableOpacity>
        <Text className='text-center py-5 text-xl'>Select a Ride</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View className='-ml-6'>
              <Text className='text-xl font-semibold'>{title}</Text>
              <Text>Travel Time ...</Text>
            </View>
            <Text className='text-xl'>99€</Text>
          </TouchableOpacity>
        )}
      />

      <View className='my-auto'>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text className='text-center text-white text-xl'>Choose {selected?.title }</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})