import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

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

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

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
        <Text className='text-center py-5 text-xl'>
          Select a Ride - {travelTimeInformation?.distance.text} 
        </Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-6 ${id === selected?.id && 'bg-gray-200'}`}
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
              <Text className='text-[13px]'>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text className='text-xl'>

              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'EUR',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier
                ) / 100
              )}

            </Text>
          </TouchableOpacity>
        )}
      />

      <View className=''>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 mx-3 mb-8 ${!selected && 'bg-gray-300'}`}>
          <Text className='text-center text-white text-xl'>Choose {selected?.title }</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})