import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './nativewind.config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('Store initialized:', store.getState());
  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

    <Provider store={store}>
          <HomeScreen />
    </Provider>
  );
}
