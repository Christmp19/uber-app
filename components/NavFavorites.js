import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, London, UK'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK'
    }
]

const NavFavorites = () => {

  return (
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
              <View className='bg-gray-200 h-[0.5px]' />
          )}
          renderItem={({ item: { location, destination, icon } }) => (
              <TouchableOpacity className='flex-row items-center m-5'>
                  <Icon
                      style={styles.icon}
                      name={icon}
                      type='ionicon'
                      color='white'
                      size={18}
                  />
                  <View>
                      <Text className='font-semibold text-lg'>{location}</Text>
                      <Text className='text-gray-500'>{destination}</Text>
                  </View>
              </TouchableOpacity>
          )}
      />
  )
}

export default NavFavorites

const styles = StyleSheet.create({
    icon: {
        marginRight: 16,
        borderRadius: 50,
        backgroundColor: '#D1D5DB',
        padding: 12,
    }
})