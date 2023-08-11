import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
// } from 'react-native';
// import Home from './src/screens/Home/Home.class';
import Home from './src/screens/Home/Home.func';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import List from './src/screens/ListScreen/List';
import Employee from './src/screens/Employee/Employee';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import Counter from './src/screens/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  useEffect(() => {
    messaging().getToken().then(token => {
      // here we get unique device token, which helps us to fire notifications to targetted audience
      console.log("Device token: ", token);
    });
    // For background notifications
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      // whenever user receives the notification in background, this method get triggered.
      console.log('Message handled in the background!', remoteMessage);
    });
    // For foreground notifications
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // whenever user receives the notification in foreground, this method get triggered.
      console.log('Message handled in the foreground!', remoteMessage);
    });

    return unsubscribe;
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen component={Counter} name='Counter' />
            <Drawer.Screen component={Employee} name='Employee' />
            <Drawer.Screen component={Home} name='Home' />
            <Drawer.Screen component={List} name="List" />
          </Drawer.Navigator>
          {/* <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen component={Home} name='Home'
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen component={List} name='List' />
          </Stack.Navigator> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
