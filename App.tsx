/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
// import Home from './src/screens/Home/Home.class';
import Home from './src/screens/Home/Home.func';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1,}}>
      <Home />
    </SafeAreaView>
  );
}

export default App;
