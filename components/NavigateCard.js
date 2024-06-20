import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination} from '../slices/navSlice';
import {useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className='text-center py-5 text-xl'>Good Morning, Christie</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description
                })
              );
              navigation.navigate('RideOptionsCard')
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>
      <View className='flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100'>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          className='flex flex-row justify-between bg-black w-24 py-3 px-4 rounded-full'
        >
          <Icon
            name='car'
            type='font-awesome'
            color={'#fff'}
            size={16}
          />
          <Text className='text-white text-center'>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row justify-between bg-blue-500 w-24 py-3 px-4 rounded-full'
        >
          <Icon
            name='fast-food-outline'
            type='ionicon'
            color={'#fff'}
            size={16}
          />
          <Text className='text-white text-center'>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})