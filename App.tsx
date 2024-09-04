import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/App/ProductDetailsScreen';
import HomeScreen from './src/screen/App/HomeScreen';
import LoginScreen from './src/screen/Auth/LoginScreen';
import SignupScreen from './src/screen/Auth/SignupScreen';
import OnBoardingScreen from './src/screen/Auth/onBoardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'ONBOARDING'} component={OnBoardingScreen} />
        <Stack.Screen name={'LOGIN'} component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignupScreen} />
        <Stack.Screen name={'HOME'} component={HomeScreen} />
        <Stack.Screen
          name={'PRODUCT_DETAILS'}
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
