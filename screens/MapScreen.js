import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/4">
        <Map />
      </View>
      <View className="h-3/4">
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen