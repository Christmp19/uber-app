import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './nativewind.config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('Store initialized:', store.getState());
  return (
    <Provider store={store}>
      <NavigationContainer>
    <SafeAreaProvider>
        <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,

              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
        </Stack.Navigator>
    </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

    // <Provider store={store}>
    //   <SafeAreaProvider>
    //     <HomeScreen />
    //   </SafeAreaProvider>
    // </Provider>
  );
}
