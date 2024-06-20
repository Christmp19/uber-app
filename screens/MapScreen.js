import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen