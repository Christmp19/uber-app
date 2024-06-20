import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
];


const NavOptions = () => {
    const navigation = useNavigation();

  return (
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
              < TouchableOpacity
                  onPress={() => navigation.navigate(item.screen)}
                  className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'>
                  <View>
                      <Image
                          style={{ width: 120, height: 120, resizeMode: 'contain' }}
                          source={{ uri: item.image }}
                      />
                      <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
                      <Icon
                          style={styles.icon}
                          name='arrowright'
                          color='white'
                          type='antdesign'
                      />
                 </View>
              </TouchableOpacity>
          )}
      />
  )
}

const styles = StyleSheet.create({

    icon: {
        padding: 8,
        backgroundColor: 'black',
        borderRadius: 50,
        width: 40,
        height: 40,
        marginTop: 16,
    },
});


export default NavOptions