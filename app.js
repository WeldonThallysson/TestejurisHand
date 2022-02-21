import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tela2 from './src/components/tela2';
import tela1 from './src/components/tela1';
const Stack = createNativeStackNavigator()


const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="Tela1" component={tela1}/>
          <Stack.Screen name="Tela2" component={tela2}/>
        
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
