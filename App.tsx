import 'react-native-gesture-handler';
import React from 'react';
// import {
//   SafeAreaView,
// } from 'react-native';
// import Home from './src/screens/Home/Home.class';
import Home from './src/screens/Home/Home.func';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './src/screens/ListScreen/List';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen component={Home} name='Home'
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen component={List} name='List' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
