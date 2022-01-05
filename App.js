import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { requestPermission } from './src/utility/AskPermission';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    requestPermission()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
     
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
   
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
