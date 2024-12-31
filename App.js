import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './components/FirstScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import JobDetailScreen from './components/JobDetailScreen';
import ProfileScreen from './components/ProfileScreen';
import SavedScreen from './components/SavedScreen'; // Import SavedScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: 'Login',
            headerStyle: { backgroundColor: '#5E5CE6' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerTitle: 'Sign Up',
            headerStyle: { backgroundColor: '#5E5CE6' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobDetailScreen"
          component={JobDetailScreen}
          options={{
            headerTitle: 'Job Details',
            headerStyle: { backgroundColor: '#5E5CE6' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: 'Profile',
            headerStyle: { backgroundColor: '#5E5CE6' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{
            headerTitle: 'Saved Jobs',
            headerStyle: { backgroundColor: '#5E5CE6' },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
